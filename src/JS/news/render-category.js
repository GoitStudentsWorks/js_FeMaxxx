import { fetchImages } from "./fetch-news-categories";
import Notiflix from "notiflix";
const buttonsContainer = document.querySelector("[data-filter-btn-container]");
const gallery = document.querySelector(".card-news");
import { btnLike } from "./btn-favorite";
import { btnRead } from "./btn-read";
import { renderByWidth } from "./window-width";

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
      return `
      <li class="card-news__item">
      <img class="card-news__img" src="${array.photo}" alt="" loading="lazy" />
      <span class="card-news__categories">${array.category}</span>
      <button class="card-news__btn-like">
        <span class="card-news__add-to-favorite-btn"
          >Add to favorite
        </span>
        <svg
            class="card-news__icon-like"
            width="16"
            height="16"
            viewBox="0 0 37 32"
          >
            <path
              style="stroke: var(--color1, #4440f7)"
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-miterlimit="4"
              stroke-width="2.2857"
              d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"
            ></path>
          </svg>
      </button>
      <div class="card-news__wrapper">
        <h3 class="card-news__caption">${array.headline}</h3>
        <p class="card-news__text">${array.abstract}</p>
      </div>
      <div class="card-news__box">
        <span class="card-news__time">${array.pub_date}</span>
        <a class="card-news__link" target="_blank" href="${array.url}">Read more</a>
      </div>
    </li>`;
    })
    .join("");
  gallery.innerHTML = markup;

  btnLike(newArray);
  btnRead(newArray);
}
