import fetchShopify from "../lib/shopify";

export const getAllProducts = async () => {
  const query = `
    {
      products(first: 12) {
        edges {
          node {
            id
            title
            handle
            description
            images(first: 1) {
              edges {
                node {
                  src: url
                }
              }
            }
            priceRange {
              minVariantPrice {
                amount
              }
            }
          }
        }
      }
    }
  `;

  const data = await fetchShopify(query);
  return data.products.edges.map((edge) => edge.node);
};