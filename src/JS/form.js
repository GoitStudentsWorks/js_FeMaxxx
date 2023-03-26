



import axios from 'axios';
const searchInput = document.querySelector(".search-input");
const openBtn = document.querySelector('.open-input');
const icon = document.querySelector(".search-icon__svg");
const form = document.querySelector(".search-form");
openBtn.addEventListener('click', showInput);


let searchQuery= ''

export async function fetchArticles(){
   
    const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
    const params = {
           'api-key': 'zHSQzxiahl4NGmmsXRmy0bUeXAOYuqJ3',
            q: `${searchQuery}`
    }
    
    const request = await axios.get(BASE_URL, {params});
    const response = await request.data;
    console.log(response)
    return response
    
}

form.addEventListener("submit", onSearch);

async function onSearch(e) {
  e.preventDefault()
  searchQuery = searchInput.value.trim();

  if (searchQuery === "") {
    console.log("упс");
    return
  }
 await fetchArticles(searchQuery)

}
  

function showInput() {
  searchInput.classList.toggle('visually-hidden');
 icon.classList.toggle('active')
}


