const body = document.querySelector("body");
const iconSun = document.querySelector(".theme-icon__sun");
const iconMoon = document.querySelector("theme-icon__moon");
const checkbox = document.querySelector(".checkbox");
checkbox.addEventListener("click", changeTheme);

body.className = localStorage.getItem("theme");
function changeTheme() {


  body.classList.toggle("dark-theme");
  body.classList.toggle("light-theme");
  if (body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark-theme");

    body.classList.remove("light-theme");
  } else {
    localStorage.setItem("theme", "light-theme");
  }
  body.className = localStorage.getItem("theme");
}

