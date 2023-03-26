const KEY_URL = "h82LSxHnwytWrbBDAaEM0yRoLcpNOT6L";
const BASE_URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
const categories = "sport";
export async function fetchImages(value, page) {
  try {
    const response = await fetch(
      `${BASE_URL}${value}&api-key=${KEY_URL}&page=${page}`
    );
    const newCard = await response.json();
    console.log(newCard);
    return newCard;
  } catch (error) {
    console.log(error);
  }
}
