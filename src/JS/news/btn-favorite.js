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
      } else {
        // Удаляем информацию о карточке из массива
        const cardIndex = favoriteCards.findIndex(
          card => card.headline === newArray[index].headline
        );
        if (cardIndex !== -1) {
          favoriteCards.splice(cardIndex, 1);
          // Обновляем локальное хранилище
          localStorage.setItem("favoriteCards", JSON.stringify(favoriteCards));
        }
        isFavorite = false;
      }
    });
  });
}
