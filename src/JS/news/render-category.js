import { fetchImages } from "./fetch-news-categories";
import Notiflix from "notiflix";
const buttonsContainer = document.querySelector("[data-filter-btn-container]");
const gallery = document.querySelector(".card-news");
import { btnLike } from "./btn-favorite";
import { btnRead } from "./btn-read";
import { renderByWidth } from "./window-width";
import { markupOfCard } from "./markup-of-card";

const undefinedImages = document.querySelector(".undefined");

buttonsContainer.addEventListener("click", choiceFilter);

function choiceFilter(e) {
  if (e.target.nodeName !== "BUTTON" || e.target.name === "") {
    return;
  } else {
    const category = `${e.target.name}.json?`;
    fetchImages(category, 0).then(proccesImageCreate);
  }
}

function proccesImageCreate(foundData) {
  const createCard = foundData.results;
  if (!createCard.length) {
    Notiflix.Notify.failure(
      "Sorry, there are no images matching your search query. Please try again."
    );
    undefinedImages.style.display = "block";
  } else {
    undefinedImages.style.display = "none";
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
        headline: card.title,
        abstract:
          card.abstract.length > 100
            ? card.abstract.slice(0, 100) + "..."
            : card.abstract,
        category: card.section,
        pub_date: card.published_date
          .split("")
          .splice(0, 10)
          .join("")
          .replaceAll("-", "/"),
        photo: card.multimedia
          ? `${card.multimedia[2].url}`
          : "https://img.freepik.com/free-vector/internet-network-warning-404-error-page-or-file-not-found-for-web-page_1150-48326.jpg?w=996&t=st=1676297842~exp=1676298442~hmac=6cad659e6a3076ffcb73bbb246c4f7e5e1bf7cee7fa095d67fcced0a51c2405c",

        url: card.web_url,
      };
      newArray.push(array);
      //   console.log(card);
      return markupOfCard(array);
    })
    .join("");
  gallery.innerHTML = markup;

  btnLike(newArray);
  btnRead(newArray);
}
