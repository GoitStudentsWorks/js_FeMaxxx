const searchBtn = document.querySelector(".open-search-input")
const btnContainer = document.querySelector(".btn-container")
console.log(btnContainer)
searchBtn.addEventListener('click', onSearchBtn)

function onSearchBtn(evt) {
    evt.preventDefault()
    searchBtn.style.display = "none"
    inputMarkup()
}
    
function inputMarkup() {
    const markup = '<input class="input" type="text" name="searchQury" autocomplete="off" placeholder="Search |">'
    // console.log(typeof markup)
    btnContainer.insertAdjacentHTML('afterbegin', markup)

}

(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('visually-hidden');
  }
})();