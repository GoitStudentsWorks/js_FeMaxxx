import SearchNewsApiService from "./news-api";

const searchNewsApiService = new SearchNewsApiService();
searchNewsApiService.query = "country";
searchNewsApiService.getNews().then(optimizeArray);

async function optimizeArray(result) {
  let newArray = [];
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

  console.log(newArray);
  return newArray;
}
