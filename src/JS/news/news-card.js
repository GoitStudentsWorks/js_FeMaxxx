import { fetchImages } from "./fetch-news-search";
import Notiflix from "notiflix";
const input = document.querySelector(".search-form-input");
const btnSearch = document.querySelector(".search-form-button");
const gallery = document.querySelector(".card-news");

// btnSearch.addEventListener("click", onBtnCreate);

let newArray = [];

function onBtnCreate(event) {
  event.preventDefault();
  const searchFormInput = input.value.trim();
  console.log(searchFormInput);
  if (!searchFormInput) {
    return;
  }
  fetchImages(searchFormInput).then(proccesImageCreate);
}

function proccesImageCreate(foundData) {
  const createCard = foundData.response.docs;
  if (!createCard.length) {
    Notiflix.Notify.failure(
      "Sorry, there are no images matching your search query. Please try again."
    );
  } else {
    renderImageList(createCard);
  }
}

function renderImageList(card) {
  const markup = card
    .map(card => {
      const array = {
        headline: card.headline.main,
        abstract: card.abstract,
        category: card.section_name,
        pub_date: card.pub_date,
        photo: card.multimedia[0].url,
        url: card.web_url,
      };
      newArray.push(array);
      console.log(card);
      return `
        <li class="card-news__item">
  <img class="card-news__img" src="${array.photo}" alt="" loading="lazy" />
  <h3 class="card-news__caption">${array.headline}</h3>
  <p class="card-news__text">${array.abstract}</p>
  <div class="card-news__box">
    <span class="card-news__time">${array.pub_date}</span>
    <a class="card-news__link" href="${array.url}">Read more</a>
  </div>
</li>
      `;
    })
    .join("");
  gallery.innerHTML += markup;
}
