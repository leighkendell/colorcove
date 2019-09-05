const sanityClient = require('@sanity/client');
const chrome = require('chrome-aws-lambda');
const puppeteer = require('puppeteer-core');

// Set up sanity client
const client = sanityClient({
  projectId: process.env.SANITY_PROJECT,
  dataset: process.env.SANITY_DATASET,
  token: process.env.SANITY_LAMBDA_TOKEN,
  useCdn: false,
});

exports.handler = async function(event) {
  const { id } = event.queryStringParameters;
  const url = `https://colorcove-web.netlify.com/render-pdf?id=${id}`;

  const browser = await puppeteer.launch({
    args: chrome.args,
    executablePath: await chrome.executablePath,
    headless: chrome.headless,
  });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });
  const pdf = await page.pdf();
  await browser.close();

  try {
    // Get the existing document from sanity
    const document = await client.getDocument(id);

    // Delete the old PDF file if it exists
    if (document.file) {
      await client
        .patch(id)
        .unset(['file'])
        .commit();
      await client.delete(document.file.asset._ref);
    }

    // Upload the new PDF file
    const returnedFile = await client.assets.upload('file', pdf, {
      filename: `${document.title}.pdf`,
    });

    // Set the reference to the new file
    const res = await client
      .patch(id)
      .set({
        file: {
          asset: {
            _type: 'reference',
            _ref: returnedFile._id,
          },
        },
      })
      .commit();

    console.log('Successfully generated PDF');
    return {
      statusCode: 200,
      body: JSON.stringify(res),
    };
  } catch (err) {
    console.log('There was an error generating the PDF');
    return {
      statusCode: 400,
      body: JSON.stringify(err),
    };
  }
};
