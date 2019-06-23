const sanityClient = require('@sanity/client');
const crypto = require('crypto');
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

// Set up sanity client
const client = sanityClient({
  projectId: process.env.SANITY_PROJECT,
  dataset: process.env.SANITY_DATASET,
  token: process.env.SANITY_LAMBDA_TOKEN,
  useCdn: false,
});

export async function handler(event) {
  // Get the hmac from shopify
  const hmac = event.headers['x-shopify-hmac-sha256'];

  // Create a hash using the body and the secrey key
  const hash = crypto
    .createHmac('sha256', process.env.SHOPIFY_WEBHOOK_SECRETKEY)
    .update(event.body, 'utf8', 'hex')
    .digest('base64');

  // Check the response is coming from shopify
  if (hash === hmac) {
    // Get the topic
    const topic = event.headers['x-shopify-topic'];

    // Shopify Fields
    const { id, title, handle, variants } = JSON.parse(event.body);
    const defaultVariant = (variants && variants[0]) || null;

    // Sanity query to return ID
    const query = `*[_type == "product" && shopifyId == ${id}] {_id}`;

    // The fields we want to update
    const productFields = {
      _type: 'product',
      title,
      slug: {
        _type: 'slug',
        current: handle,
      },
      shopifyId: id,
      shopifyDefaultVariant: {
        title: defaultVariant && defaultVariant.title,
        price: defaultVariant && defaultVariant.price,
      },
    };

    // Create a new sanity product page
    if (topic === 'products/create') {
      try {
        const res = await client.create(productFields);
        console.log('Successfully created a new product page');
        return {
          statusCode: 200,
          body: JSON.stringify(res),
        };
      } catch (err) {
        console.log('There was an error creating a new product page');
        return {
          statusCode: 400,
          body: JSON.stringify(err),
        };
      }
    }

    // Fetch an existing sanity product page
    if (topic === 'products/update' || topic === 'products/delete') {
      const [data] = await client.fetch(query);

      if (data) {
        // Update an existing sanity product page
        if (topic === 'products/update') {
          try {
            const res = await client
              .patch(data._id)
              .set(productFields)
              .commit();
            console.log('Successfully updated the product page');
            return {
              statusCode: 200,
              body: JSON.stringify(res),
            };
          } catch (err) {
            console.log('There was an error updating the product page');
            return {
              statusCode: 400,
              body: JSON.stringify(err),
            };
          }
        }

        // Delete an existing sanity product page
        if (topic === 'products/delete') {
          try {
            const res = await client.delete(data._id);
            console.log('Successfully deleted the product page');
            return {
              statusCode: 200,
              body: JSON.stringify(res),
            };
          } catch (err) {
            console.log('There was an error deleting the product page');
            return {
              statusCode: 400,
              body: JSON.stringify(err),
            };
          }
        }
      }
    }

    // Nothing got updated in sanity but the request was valid
    return {
      statusCode: 200,
      body: '',
    };
  } else {
    // Bail out, the request didn't come from Shopify
    return {
      statusCode: 403,
      body: '',
    };
  }
}
