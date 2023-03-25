const KEY_URL = "h82LSxHnwytWrbBDAaEM0yRoLcpNOT6L";
const BASE_URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
export async function fetchImages(value) {
  try {
    const response = await fetch(`${BASE_URL}${value}&api-key=${KEY_URL}`);
    const newCard = await response.json();
    return newCard;
  } catch (error) {
    console.log(error);
  }
}
