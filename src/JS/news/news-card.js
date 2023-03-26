import { fetchImages } from "./fetch-news-search";
import Notiflix from "notiflix";
import moment from "moment";
("");
const input = document.querySelector(".search-input");
const btnSearch = document.querySelector(".open-input");
const form = document.querySelector(".search-form");
const newsCard = document.querySelector(".card-news");

form.addEventListener("submit", onBtnCreate);

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
  let newArray = [];
  const markup = card
    .map(card => {
      const array = {
        headline: card.headline.main,
        abstract: card.abstract,
        category: card.section_name,
        pub_date: card.pub_date.slice(0, 10),
        photo: card.multimedia[0].url,
        url: card.web_url,
      };
      newArray.push(array);

      return `
        <li class="card-news__item">
  <img class="card-news__img" src="${array.photo}" alt="" loading="lazy" />
  <span class="card-news__categories">${array.category}</span>
  <button class="card-news__btn-like">
  Add to favorite<svg class="card-news__icon-like" width="10px" height="16px">
    <use href="/src/images/sprite.svg#heart"></use>
  </svg>
</button>
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
  newsCard.innerHTML = markup;
}
