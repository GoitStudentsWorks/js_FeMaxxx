// import { checkLokalStorage } from "./check-local-storage";
export const favoriteCards = [];
export function btnLike(newArray) {
  const btnLike = document.querySelectorAll(".card-news__btn-like");
  const spanAdd = document.querySelectorAll(".card-news__add-to-favorite-btn");
  const iconLike = document.querySelectorAll(".card-news__icon-like");

  btnLike.forEach((btn, index) => {
    let isFavorite = false; // начальное значение

    btn.addEventListener("click", () => {
      if (!isFavorite) {
        spanAdd[index].textContent = "Remove from favorite";
        iconLike[index].style.fill = "var(--color1, #4440f7)";
        btn.classList.add("favorite"); // добавить класс
        isFavorite = true; // обновить значение
      } else {
        spanAdd[index].textContent = "Add to favorite";
        iconLike[index].style.fill = "";
        btn.classList.remove("favorite"); // убрать класс
        isFavorite = false; // обновить значение
      }
    });
  });

  btnLike.forEach((btn, index) => {
    let isFavorite = false;
    btn.addEventListener("click", () => {
      if (!isFavorite) {
        // Добавляем информацию о карточке в массив
        favoriteCards.push({
          headline: newArray[index].headline,
          abstract: newArray[index].abstract,
          category: newArray[index].category,
          pub_date: newArray[index].pub_date,
          photo: newArray[index].photo,
          url: newArray[index].url,
        });
        // Обновляем локальное хранилище
        localStorage.setItem("favoriteCards", JSON.stringify(favoriteCards));
        isFavorite = true;
      }
      //   else {
      //     // Удаляем информацию о карточке из массива
      //     const cardIndex = favoriteCards.findIndex(
      //       card => card.headline === newArray[index].headline
      //     );
      //     if (cardIndex !== -1) {
      //       favoriteCards.splice(cardIndex, 1);
      //       // Обновляем локальное хранилище
      //       localStorage.setItem("favoriteCards", JSON.stringify(favoriteCards));
      //     }
      //     isFavorite = false;
      //     // console.log(favoriteCards);
      //   }
      //   console.log(favoriteCards);
    });
    // console.log(favoriteCards);
  });
}

// const newsList = document.querySelector(".card-news");

// newsList.addEventListener("click", btnAddToFavorite);
// let newLocalStorage = [];

// function isLocalEmpty() {
//   if (JSON.parse(localStorage.getItem("favoriteCards")) === null) {
//     newLocalStorage = [];
//     return;
//   }
//   newLocalStorage = JSON.parse(localStorage.getItem("favoriteCards"));
// }
// isLocalEmpty();

// function btnAddToFavorite(event) {
//   const btn = event.target.closest(".card-news__btn-like");
//   if (!btn) return;
//   isLocalEmpty();
//   let url =
//     btn.parentNode.nextElementSibling.nextElementSibling.lastElementChild
//       .textContent;
//   if (!btn.classList.contains("favorite")) {
//     btn.classList.add("favorite");
//     addToFavoriteLocal(btn);
//     return;
//   }
//   btn.classList.remove("favorite");
//   for (let i = 0; i < newLocalStorage.length; i += 1) {
//     if (newLocalStorage[i].url === url) {
//       newLocalStorage.splice(i, 1);
//     }
//   }
//   localStorage.setItem(`favoriteCards`, JSON.stringify(newLocalStorage));
// }

// function addToFavoriteLocal(btn) {
//   const favoriteCard = {
//     id: btn.parentNode.parentNode.id,
//     img: btn.parentNode.childNodes[1].attributes.src.nodeValue,
//     category: btn.parentNode.childNodes[3].innerText,
//     title: btn.parentNode.parentNode.childNodes[3].children[0].innerText,
//     description: btn.parentNode.parentNode.childNodes[3].children[1].innerText,
//     date: btn.parentNode.parentNode.lastElementChild.children[0].innerText,
//     link: btn.parentNode.parentNode.lastElementChild.children[1].attributes[2]
//       .value,
//     favorite: "true",
//     url: btn.parentNode.nextElementSibling.nextElementSibling.lastElementChild
//       .textContent,
//   };
//   for (let i = 0; i < newLocalStorage.length; i += 1) {
//     if (newLocalStorage[i].url === favoriteCard.url) return;
//   }

//   newLocalStorage.push(favoriteCards);
//   localStorage.setItem(`favoriteCards`, JSON.stringify(newLocalStorage));
// }
