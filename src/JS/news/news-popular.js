import PopularNewsApiService from "./news-api-popular";

const popularNewsApiService = new PopularNewsApiService();
popularNewsApiService.getNews().then(popularOptimizeArray);
let newArray = [];

function popularOptimizeArray(result) {
  result.map(obj => {
    const array = {
      headline: obj.title,
      abstract: obj.abstract,
      category: obj.section,
      pub_date: obj.published_date,
      photo: obj.media[0],
      url: obj.url,
    };
    newArray.push(array);
  });

  return newArray;
}
