export function btnRead(newArray) {
  const readCards = [];
  const btnRead = document.querySelectorAll(".card-news__link");
  const iconRead = document.querySelector(".card-news__read");
  const opacity = document.querySelector(".card-news__img");

  btnRead.forEach((btn, index) => {
    let isRead = false; // начальное значение

    btn.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        // пользователь перешел на другую вкладку
        //   console.log("Пользователь перешел на другую вкладку");
        return;
      } else {
        // пользователь вернулся на страницу
        //   console.log("Пользователь вернулся на страницу");
        opacity[index].classList.add("opacity");
        iconRead[index].classList.remove("hidden");
        btn.classList.add("opacity");
        isRead = true; // обновить значение
      }
    });

    // btn.addEventListener("click", () => {
    //   if (!isRead) {
    //     opacity.classList.add("opacity");
    //     iconRead.classList.remove("hidden");
    //     isRead = true; // обновить значение
    //   } else {
    //     opacity[index].classList.remove("opacity");
    //     iconRead[index].classList.remove("hidden");
    //     isRead = false; // обновить значение
    //   }
    // });
  });

  btnRead.forEach((btn, index) => {
    let isRead = false;
    btn.addEventListener("click", () => {
      if (!isRead) {
        // Добавляем информацию о карточке в массив
        readCards.push({
          headline: newArray[index].headline,
          abstract: newArray[index].abstract,
          category: newArray[index].category,
          pub_date: newArray[index].pub_date,
          photo: newArray[index].photo,
          url: newArray[index].url,
        });
        // Обновляем локальное хранилище
        localStorage.setItem("readCards", JSON.stringify(readCards));
        isRead = true;
      } else {
        // Удаляем информацию о карточке из массива
        const cardIndex = readCards.findIndex(
          card => card.headline === newArray[index].headline
        );
        if (cardIndex !== -1) {
          readCards.splice(cardIndex, 1);
          // Обновляем локальное хранилище
          localStorage.setItem("readCards", JSON.stringify(readCards));
        }
        isRead = false;
      }
    });
  });
  console.log(readCards);
  return readCards;
}
