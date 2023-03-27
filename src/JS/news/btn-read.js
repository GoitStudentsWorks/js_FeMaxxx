export function btnRead(newArray) {
  const readCards = [];
  const btnRead = document.querySelectorAll(".card-news__link");

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
}
