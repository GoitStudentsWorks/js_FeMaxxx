
const searchInput = document.querySelector(".search-input");
const openBtn = document.querySelector(".open-input");
const icon = document.querySelector(".search-icon__svg");
// const form = document.querySelector(".search-form");
openBtn.addEventListener("click", showInput);
window.addEventListener('resize', checkSize)
checkSize()
// let searchQuery = "";

// export async function fetchArticles() {
//   const BASE_URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
//   const params = {
//     "api-key": "zHSQzxiahl4NGmmsXRmy0bUeXAOYuqJ3",
//     q: `${searchQuery}`,
//   };

//   const request = await axios.get(BASE_URL, { params });
//   const response = await request.data;

//   return response;
// }

// form.addEventListener("submit", onSearch);

// async function onSearch(e) {
//   e.preventDefault();
//   searchQuery = searchInput.value.trim();

//   if (searchQuery === "") {
//     console.log("упс");
//     return;
//   }
//   await fetchArticles(searchQuery);
// }

 function showInput() {
    
    icon.classList.add('search-icon__active')
   
    searchInput.classList.remove('visually-hidden')
   
}
if(showInput){
    // openBtn.removeAttribute('type', 'button')
    openBtn.setAttribute('type', 'submit')
}

function checkSize(){

    if(document.documentElement.clientWidth < 768){
        searchInput.classList.add('visually-hidden')
       }
        else{
           searchInput.classList.remove('visually-hidden')
        }
       
}