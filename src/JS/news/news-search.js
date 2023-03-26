import SearchNewsApiService from "./news-api-search";

const searchNewsApiService = new SearchNewsApiService();
searchNewsApiService.query = "country";
searchNewsApiService.getNews().then(searchOptimizeArray);
let newArray = [];

function searchOptimizeArray(result) {
  result.map(obj => {
    const array = {
      headline: obj.headline.main,
      abstract: obj.abstract,
      category: obj.section_name,
      pub_date: obj.pub_date,
      photo: obj.multimedia,
      url: obj.web_url,
    };
    newArray.push(array);
  });

  return newArray;
}
