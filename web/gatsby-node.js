exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityProduct(
        filter: { slug: { current: { ne: "null" } }, shopifyId: { gt: 0 } }
      ) {
        edges {
          node {
            id
            slug {
              current
            }
            shopifyHandle
          }
        }
      }
      allSanityPage(filter: { slug: { current: { ne: "null" } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  // Loop through products and create pages
  const products = result.data.allSanityProduct.edges || [];
  products.forEach(edge => {
    const slug = edge.node.slug.current;
    const { shopifyHandle } = edge.node;
    const path = `/products/${slug}`;

    createPage({
      path,
      component: require.resolve('./src/templates/product.tsx'),
      context: { id: edge.node.id, slug, shopifyHandle },
    });
  });

  // Loop through pages and create pages
  const pages = result.data.allSanityPage.edges || [];
  pages.forEach(edge => {
    const slug = edge.node.slug.current;
    let path = `/${slug}`;
    let component = require.resolve('./src/templates/page.tsx');

    if (slug === 'home') {
      path = '/';
    }

    if (slug === 'products') {
      component = require.resolve('./src/templates/products.tsx');
    }

    createPage({
      path,
      component,
      context: { id: edge.node.id, slug },
    });
  });
};
