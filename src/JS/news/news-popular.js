// import PopularNewsApiService from "./news-api-popular";

// const popularNewsApiService = new PopularNewsApiService();
// popularNewsApiService.getNews().then(popularOptimizeArray);
// let newArray = [];

// function popularOptimizeArray(result) {
//   result.map(obj => {
//     const array = {
//       headline: obj.title,
//       abstract: obj.abstract,
//       category: obj.section,
//       pub_date: obj.published_date,
//       photo: obj.media[0],
//       url: obj.url,
//     };
//     newArray.push(array);
//   });

//   return newArray;
// }

let array = []
const axios = require("axios").default;


 export async function getNews() {
    const BASE_URL='https://api.nytimes.com/svc/mostpopular/v2/emailed/30.json';
    const params ={
     'api-key': 'gUPN3f4elEIT2Q784E2y4fhRAmWRXms5',
     
    }
   const request= await axios.get(BASE_URL, {params})
  
const response = await request.data.results;
console.log(response)
return response 
   
}

getNews()
