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
    const path = `/products/${edge.node.slug.current}`;

    createPage({
      path,
      component: require.resolve('./src/templates/product.tsx'),
      context: { id: edge.node.id, slug: edge.node.slug.current },
    });
  });
};
