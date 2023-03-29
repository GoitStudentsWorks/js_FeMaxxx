// import { btnRead } from "./btn-read";
// import { markupOfCard } from "./markup-of-card";

// btnRead();
// $(document).ready(function () {
//   $(".spoiler_title").click(function () {
//     if ($(".spoiler").hasClass("one")) {
//       $(".spoiler_title").not($(this)).removeClass("spoiler-active");
//       $(".spoiler_content").not($(this).next()).slideUp(300);
//     }
//     $(this).toggleClass("spoiler-active").next().slideToggle(300);
//   });
// });
import { btnLike } from "./btn-favorite";
import { markupOfCard } from "./markup-of-card";
import { checkLokalStorage } from "./check-local-storage";

const dateListEl = document.querySelector(".date-list-search");
const readListSearchEl = document.querySelector(".date-list-search");
const readFormEl = document.querySelector(".search-form");
const readInputEl = document.querySelector(".search-input");

const localData = JSON.parse(localStorage.getItem("readCards"));

// const undefinedReadeMore = document.querySelector(".underfined");
function arrLocal() {
  if (localData === null) {
    // undefinedReadeMore.classList.remove("underfined-hidden");
    return;
  }
  return localData;
}

function sortDateReadMore(array = [], callback) {
  const groupByDate = {};
  for (const objectEl of array) {
    const key = callback(objectEl);
    if (groupByDate[key]) {
      groupByDate[key].push(objectEl);
    } else {
      groupByDate[key] = [objectEl];
    }
  }
  return groupByDate;
}

const sortDate = sortDateReadMore(arrLocal(), objectEl => objectEl.dayRead);
markupDateRead(sortDate);
function markupDateRead(date) {
  const markupBlockDate = Object.keys(date)
    .map(key => {
      return `<li class="date-list__item">
  <button class="date-list__btn"><span class="date-list__btn-text">${key}</span><span class="date-list__btn-block">
  <svg class="date-list__btn-icon" width="14" height="9" aria-hidden="true" style="position: absolute;>
<symbol id="icon-Vector-2-1" viewBox="0 0 50 32">
<path d="M5.867 0l-5.867 6.080 24.889 25.92 24.889-25.92-5.831-6.080-19.058 19.769-19.058-19.769z"></path>
</symbol>
</svg></span>
  </button>
  <ul class="list-news hidden">${markupOfCard(date[key])}</ul>
</li>`;
    })
    .join("");
  createMarkupLoadMore(markupBlockDate);
}

const dateListItem = document.querySelectorAll(".date-list__item");
dateListItem[0].classList.add("hidden");

dateListItem.forEach(element => {
  btnLike(localData);
  let spanAdd = "";
  let hiddenSpan = "";
  let localFavorite = JSON.parse(localStorage.getItem("favoriteCards"));
  let checkFavorite = checkLokalStorage(element, localFavorite);
  if (checkFavorite) {
    hiddenSpan = "favorite";
    spanAdd = "Remove from favorite";
  } else {
    spanAdd = "Add to favorite";
  }
});

dateListEl.addEventListener("click", event => {
  const btn = event.target.closest(`.date-list__btn`);
  if (!btn) return;

  const iconDate = btn.querySelector(".date-list__btn-block");
  const listNews = document.querySelector(".list-news");
  if (listNews.classList.contains("hidden")) {
    listNews.classList.remove("hidden");
    iconDate.classList.add("turn");
  } else {
    listNews.classList.add("hidden");
    iconDate.classList.remove("turn");
  }

  //   function isHiddenItem(arr) {
  //     arr.filter(list => {
  //       list.classList.contains("hidden");
  //     });
  //   }

  //   if (!isHiddenItem(Array.from(document.querySelectorAll(".list-news")))) {
  //     const item = document.querySelectorAll(".list-news");
  //     item.forEach(elem => {
  //       elem.classList.add("hidden");
  //       iconDate.classList.toggle("turn");
  //     });
  //   }

  btn.nextElementSibling.classList.toggle("hidden");

  return;
});

function createMarkupLoadMore(markupBlockDate) {
  dateListEl.innerHTML = markupBlockDate;
}

readFormEl.addEventListener("submit", form);

function form(event) {
  let newArrForMarkupSearch = [];
  event.preventDefault();

  if (readInputEl.value.trim() === "") {
    dateListEl.classList.remove("hidden");
    // document.querySelector(".underfined").classList.add("underfined-hidden");
    readListSearchEl.classList.add("hidden");
    newArrForMarkupSearch = [];
    return;
  }

  const inputValue = readInputEl.value.toLowerCase();

  for (let i = 0; i < localData.length; i += 1) {
    let iteration = localData[i];
    if (
      iteration.abstract.toLowerCase().includes(inputValue) ||
      iteration.headline.toLowerCase().includes(inputValue) ||
      iteration.category.toLowerCase().includes(inputValue) ||
      iteration.category.toLowerCase() === inputValue
    ) {
      newArrForMarkupSearch.push(iteration);
    }
  }
  if (newArrForMarkupSearch.length === 0) {
    dateListEl.classList.add("hidden");
    readListSearchEl.classList.add("hidden");
    // document.querySelector(".underfined").classList.remove("underfined-hidden");
    newArrForMarkupSearch = [];
    return;
  }
  //   document.querySelector(".underfined").classList.add("underfined-hidden");
  dateListEl.classList.add("hidden");
  readListSearchEl.classList.remove("hidden");

  const markupBlockReadSearch = markupOfCard(newArrForMarkupSearch);

  createMarkupLoadMore(markupBlockReadSearch);
}

function createMarkupLoadMore(markupBlockDate) {
  readListSearchEl.innerHTML = markupBlockDate;
  newArrForMarkupSearch = [];
}
