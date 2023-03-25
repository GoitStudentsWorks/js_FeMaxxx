import SearchNewsApiService from "../JS/news/news-api";
import { optimizeArray } from "../JS/news/news";

const searchNewsApiService = new SearchNewsApiService();
searchNewsApiService.query = "country";
searchNewsApiService.getNews().then(lengthArray);
optimizeArray().then(renderCard);

function lengthArray(result) {
  return result.length;
}
const box = document.querySelector(".box");
function renderCard(cards) {
  const galleryOfCards = cards
    .map(
      card => `
      <div class="card">
        <img src="${card.photo}" alt="${card.headline}" loading="lazy" />
        <div class="info">
          <p class="info-item">
            ${card.headline}
          </p>
          <p class="info-item">
            ${card.category}
          </p>
          <p class="info-item">
            ${card.abstract}
          </p>
          <p class="info-item">
            ${card.pub_date}
          </p>
        </div>
       </div>
      </a>`
    )
    .join("");
  box.insertAdjacentHTML("beforeend", galleryOfCards);
}

const prew = document.querySelector(".prew");
prew.setAttribute("disabled", true);
const next = document.querySelector(".next");
const nums = document.querySelector(".numbers");
const dots = document.querySelectorAll(".dots");
const num = document.querySelectorAll(".num");
let num1 = num[0];
let num2 = num[1];
num2.classList.add("active");
let num3 = num[2];
let num4 = num[3];
let num5 = num[4];
num5.innerHTML = 20;
let btn = null;
let number = 1;
let changer = 3;
const mql = window.matchMedia("(max-width: 320px)");
let mobileNum = document.querySelector(".mobile-num");
if (mql.matches) {
  prew.classList.add("hidden");
}

nums.addEventListener("click", numsClick);
function numsClick(e) {
  removeClass();
  btn = e.target;
  btn.classList.add("active");
  optimizeArray().then(renderCard);
  number = Number(btn.innerHTML);
  if (number === 1) {
    num1.classList.add("hidden");
    num2.classList.add("active");
    num2.innerHTML = 1;
    num3.innerHTML = 2;
    num4.innerHTML = 3;
    num4.classList.remove("hidden");
    num4.classList.remove("active");
    num5.classList.remove("hidden");
    num5.classList.remove("active");
    dots[0].classList.add("hidden");
    dots[1].classList.remove("hidden");
  }
  if (number === 20) {
    num1.classList.remove("hidden");
    num2.innerHTML = 19;
    num3.innerHTML = 20;
    num3.classList.add("active");
    num2.classList.remove("active");
    dots[0].classList.remove("hidden");
    dots[1].classList.add("hidden");
    num4.classList.add("hidden");
    num5.classList.add("hidden");
  }
  if (mql.matches) {
    if (mobileNum.innerHTML === 20) {
      num1.classList.remove("hidden");
      num2.innerHTML = 19;
      num3.innerHTML = 20;
      num3.classList.add("active");
      num2.classList.remove("active");
      dots[0].classList.remove("hidden");
      dots[1].classList.add("hidden");
      num4.classList.add("hidden");
      num5.classList.add("hidden");
    }
  }
  prewDisabled();
  nextDisabled();
}

prew.addEventListener("click", () => {
  removeClass();
  number -= 1;
  changeButtonsPrew();
  changeClass();
  prewDisabled();
  nextDisabled();
});

next.addEventListener("click", () => {
  removeClass();
  number += 1;
  changeClass();
  changeButtonsNext();
  prewDisabled();
  nextDisabled();
});

function changeClass() {
  for (const text of num) {
    if (Number(text.textContent) === number) {
      return text.classList.add("active");
    }
  }
  if (number === 4) {
    dots[0].classList.remove("hidden");
    num1.classList.remove("hidden");
  }
  if (number === 3 && number < 4) {
    dots[0].classList.add("hidden");
    num1.classList.add("hidden");
  }
}
function changeButtonsNext() {
  changeClass();
  if (number === 2) {
    num2.classList.remove("active");
  }
  if (number === Number(num2.innerHTML) + changer) {
    num2.innerHTML = Number(num2.innerHTML) + changer;
    num2.classList.add("active");
    num3.innerHTML = Number(num3.innerHTML) + changer;
    num4.innerHTML = Number(num4.innerHTML) + changer;
  }
  if (number === 19) {
    num2.classList.add("active");
    dots[1].classList.add("hidden");
    num4.classList.add("hidden");
    num5.classList.add("hidden");
  }
  if (mql.matches) {
    if (number === 4) {
      num2.classList.add("hidden");
      num3.classList.add("hidden");
      num4.classList.add("hidden");
      mobileNum.classList.remove("hidden");
      mobileNum.classList.add("active");
    }
    mobileNum.innerHTML = Number(mobileNum.innerHTML) + 1;
    console.log(mobileNum.innerHTML);
  }
}

function changeButtonsPrew() {
  changeClass();

  if (number === 1) {
    num2.classList.add("active");
  }
  if (number === 3) {
    dots[0].classList.add("hidden");
  }
  if (number === 18) {
    dots[1].classList.remove("hidden");
    num1.classList.remove("hidden");
    num2.classList.remove("hidden");
    num3.classList.remove("hidden");
    num4.classList.remove("hidden");
    num5.classList.remove("hidden");
    num5.classList.remove("active");
    num4.innerHTML = number;
    num3.innerHTML = number - 1;
    num2.innerHTML = number - 2;
  }

  if (number === Number(num4.innerHTML) - changer) {
    num2.innerHTML = Number(num2.innerHTML) - changer;
    num3.innerHTML = Number(num3.innerHTML) - changer;
    num4.innerHTML = Number(num4.innerHTML) - changer;
  }
  if (mql.matches) {
    if (number === 3) {
      num2.classList.remove("hidden");
      num3.classList.remove("hidden");
      num4.classList.remove("hidden");
      mobileNum.classList.add("hidden");
    }
    if (number === 18) {
      num2.classList.add("hidden");
      num3.classList.add("hidden");
      num4.classList.add("hidden");
      mobileNum.classList.remove("hidden");
      mobileNum.classList.add("active");
      mobileNum.innerHTML = 19;
    }
    mobileNum.innerHTML = Number(mobileNum.innerHTML) - 1;
    console.log(mobileNum.innerHTML);
  }
}
function removeClass() {
  for (const number of num) {
    if (number.classList.contains("active")) {
      return number.classList.remove("active");
    }
    continue;
  }
}
function prewDisabled() {
  if (number > 1) {
    prew.removeAttribute("disabled");
  } else {
    prew.setAttribute("disabled", true);
  }
}
function nextDisabled() {
  if (number > 19) {
    next.setAttribute("disabled", true);
  } else {
    next.removeAttribute("disabled");
  }
}
