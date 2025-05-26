const DOMAIN = "yourshop.myshopify.com";
const STOREFRONT_ACCESS_TOKEN = "your_token";

const fetchShopify = async (query, variables = {}) => {
  const res = await fetch(`https://${DOMAIN}/api/2023-04/graphql.json`, {
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": STOREFRONT_ACCESS_TOKEN,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Shopify fetch failed");
  }

  return json.data;
};

export default fetchShopify;