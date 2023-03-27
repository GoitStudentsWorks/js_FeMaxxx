import { fetchImages } from "./fetch-news-search";
import Notiflix from "notiflix";
import { btnLike } from "./btn-favorite";
import { btnRead } from "./btn-read";
import { renderByWidth } from "./window-width";
import { markupOfCard } from "./markup-of-card";

const input = document.querySelector(".search-input");
// const btnSearch = document.querySelector(".open-input");
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
  fetchImages(searchFormInput, 2).then(proccesImageCreate);
}

function proccesImageCreate(foundData) {
  console.log(foundData);
  const createCard = foundData.response.docs;
  if (!createCard.length) {
    Notiflix.Notify.failure(
      "Sorry, there are no images matching your search query. Please try again."
    );
    newsCard.style.display = "block";
    const undefined = `<div class='undefined'>
    <h1 class='undefined-title'>We haven't found news from this category</h1>
    <picture class='undefined-picture'>
    <source srcset='./images/mobile-standard-picture.png' type='image/png' media='(max-width: 479.98px)'alt='undefined-picture'/>
    <source srcset='./images/tablet-standard-picture.png' type='image/png' media='(max-width:767.98px)' alt='undefined-picture'/>
    <source srcset='./images/desk-standard-picture.png' type='image/png' media='(min-width: 1279.98px)'alt='undefined-picture'/>
    <img src='./images/mobile-standard-picture.png' alt='undefined-picture' width='248' height='198'/></picture></div>`;
    return (newsCard.innerHTML = undefined);
  } else {
    renderImageList(createCard);
  }
}

function renderImageList(card) {
  const newArray = [];
  const length = card.length;
  const numberOfCards = renderByWidth(length);
  const firstRender = card.splice(0, numberOfCards);
  const markup = firstRender
    .map(card => {
      const array = {
        headline: card.headline.main,
        abstract:
          card.abstract.length > 100
            ? card.abstract.slice(0, 100) + "..."
            : card.abstract,
        category: card.section_name,
        pub_date: card.pub_date
          .split("")
          .splice(0, 10)
          .join("")
          .replaceAll("-", "/"),
        photo: card.multimedia.length
          ? `https://static01.nyt.com/${card.multimedia[0].url}`
          : "https://img.freepik.com/free-vector/internet-network-warning-404-error-page-or-file-not-found-for-web-page_1150-48326.jpg?w=996&t=st=1676297842~exp=1676298442~hmac=6cad659e6a3076ffcb73bbb246c4f7e5e1bf7cee7fa095d67fcced0a51c2405c",
        url: card.web_url,
      };
      newArray.push(array);

      return markupOfCard(array);
    })
    .join("");
  newsCard.innerHTML = markup;
  btnLike(newArray);
  btnRead(newArray);
}
