const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Query Products
  const products = await graphql(`
    {
      allPrismicProduct {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `);

  // Create Product Pages
  products.data.allPrismicProduct.edges.forEach(edge => {
    createPage({
      path: `/products/${edge.node.uid}`,
      component: path.resolve('src/templates/product.tsx'),
      context: {
        uid: edge.node.uid,
      },
    });
  });
}
