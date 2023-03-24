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