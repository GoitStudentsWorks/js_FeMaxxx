import CategoryNewsApiService from "./new-api-category";
const categoryNewsApiService = new CategoryNewsApiService();
categoryNewsApiService.query = "admin";
categoryNewsApiService.getNews().then(categoryOptimizeArray);
let newArray = [];

function categoryOptimizeArray(result) {
  result.map(obj => {
    const array = {
      headline: obj.title,
      abstract: obj.abstract,
      category: obj.section,
      pub_date: obj.published_date,
      photo: obj.multimedia,
      url: obj.url,
    };
    newArray.push(array);
  });

  return newArray;
}
