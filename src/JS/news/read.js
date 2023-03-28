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
// // const cardNews = document.querySelector(".card-news");
// // cardNews.addEventListener("click", linkReadMore);

// // checkLokalStorage();

// let readMoreId = [];
// isLocalEmpty();

// function isLocalEmpty() {
//   if (JSON.parse(localStorage.getItem("readCards")) === null) {
//     return;
//   }
//   readMoreId = JSON.parse(localStorage.getItem("readCards"));
// }

// function linkReadMore(event) {
//   const readMore = event.target.closest(`.card-news__link`);
//   if (!readMore) return;
//   //   readMore.parentNode.parentNode.parentNode.classList.add("opacity");
//   addReadMore(readMore);
// }

// function addReadMore(readMore) {
//   const evenDateNow = new Date();
//   const options = { year: "numeric", month: "numeric", day: "numeric" };
//   const readDateNow = evenDateNow
//     .toLocaleDateString([], options)
//     .replaceAll(".", "/");
//   const read = {
//     uri: readMore.nextElementSibling.textContent,
//     date: readMore.parentNode.firstElementChild.innerText,
//     img: readMore.parentNode.parentNode.childNodes[1].children[0].currentSrc,
//     title: readMore.parentNode.parentNode.childNodes[3].children[0].innerText,
//     description:
//       readMore.parentNode.parentNode.childNodes[3].children[1].innerText,
//     link: readMore.parentNode.children[1].href,
//     category:
//       readMore.parentNode.parentNode.childNodes[1].children[1].innerHTML,
//     dayRead: readDateNow,
//   };
//   for (let i = 0; i < readMoreId.length; i += 1) {
//     if (readMoreId[i].uri === read.uri) {
//       return;
//     }
//   }
//   readMoreId.push(read);
//   localStorage.setItem(`readCards`, JSON.stringify(readMoreId));
// }

// export const dateListEl = document.querySelector(".date-list");
// // const undefinedReadeMore = document.querySelector(".underfined");
// function arrLocal() {
//   const local = JSON.parse(localStorage.getItem("readCards"));
//   if (local === null) {
//     // undefinedReadeMore.classList.remove("underfined-hidden");
//     return;
//   }
//   return local;
// }

// function sortDateReadMore(array = [], callback) {
//   const groupByDate = {};
//   for (const objectEl of array) {
//     const key = callback(objectEl);
//     if (groupByDate[key]) {
//       groupByDate[key].push(objectEl);
//     } else {
//       groupByDate[key] = [objectEl];
//     }
//   }
//   return groupByDate;
// }

// const sortDate = sortDateReadMore(arrLocal(), objectEl => objectEl.dayRead);
// markupDateRead(sortDate);
// function markupDateRead(date) {
//   const markupBlockDate = Object.keys(date)
//     .map(key => {
//       return `<li class="date-list__item">
//   <button class="date-list__btn"><span class="date-list__btn-text spoiler__title">${key}</span><span class="date-list__btn-block">
//   <svg class="date-list__btn-icon" width="14" height="9" aria-hidden="true" style="position: absolute;>
// <symbol id="icon-Vector-2-1" viewBox="0 0 50 32">
// <path d="M5.867 0l-5.867 6.080 24.889 25.92 24.889-25.92-5.831-6.080-19.058 19.769-19.058-19.769z"></path>
// </symbol>
// </svg></span>
//   </button>
//   <ul class="list-news is-hidden">${markupOfCard(date[key])}</ul>
// </li>`;
//     })
//     .join("");
//   createMarkupLoadMore(markupBlockDate);
// }

// dateListEl.addEventListener("click", event => {
//   const btn = event.target.closest(`.date-list__btn`);
//   if (!btn) return;
//   const iconDate = btn.querySelector(".date-list__btn-icon");

//   if (!btn.nextElementSibling.classList.contains("is-hidden")) {
//     btn.nextElementSibling.classList.add("is-hidden");
//     iconDate.classList.remove("turn");
//     return;
//   }

//   function isHiddenItem(arr) {
//     arr.filter(list => {
//       list.classList.contains("is-hidden");
//     });
//   }

//   if (!isHiddenItem(Array.from(document.querySelectorAll(".list-news")))) {
//     const item = document.querySelectorAll(".list-news");
//     item.forEach(elem => {
//       elem.classList.add("is-hidden");
//       iconDate.classList.toggle("turn");
//     });
//   }

//   btn.nextElementSibling.classList.toggle("is-hidden");
//   iconDate.classList.toggle("turn");

//   return;
// });

// function createMarkupLoadMore(markupBlockDate) {
//   //   dateListEl.innerHTML = markupBlockDate;
// }

// Получаем данные из localStorage и преобразуем их из JSON-строки в объект
const storedData = JSON.parse(localStorage.getItem("readCards"));

// Сортируем объекты по дате сохранения (предполагается, что у каждого объекта есть свойство "date")
storedData.sort((a, b) => new Date(b.pub_date) - new Date(a.pub_date));

// Выводим объекты на страницу
const container = document.querySelector(".container");
storedData.forEach(item => {
  const element = document.createElement("div");
  element.textContent = item.data;
  container.appendChild(element);
});
