exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityProduct(filter: { slug: { current: { ne: "null" } } }) {
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
    const path = `/product/${edge.node.slug.current}`;

    createPage({
      path,
      component: require.resolve('./src/templates/product.tsx'),
      context: { id: edge.node.id },
    });
  });
};
