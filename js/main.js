const HIDE_CLASSNAME = "hide";
const OPEN_CLASSNAME = "open";

const navLinks = document.querySelector("#header__nav");

const menuOpenLinks = document.querySelector("#header__menu__open");
const menuCloseLinks = document.querySelector("#header__menu__close");
const bodyLinks = document.querySelector("body");

function toggleMenu() {
  if (navLinks.classList.contains(OPEN_CLASSNAME)) {
    navLinks.classList.remove(OPEN_CLASSNAME);
    menuCloseLinks.classList.remove(OPEN_CLASSNAME);
    bodyLinks.classList.remove(OPEN_CLASSNAME);
    menuOpenLinks.classList.remove(OPEN_CLASSNAME);
    navLinks.classList.add(HIDE_CLASSNAME);
  } else {
    navLinks.classList.add(OPEN_CLASSNAME);
    menuCloseLinks.classList.add(OPEN_CLASSNAME);
    bodyLinks.classList.add(OPEN_CLASSNAME);
    menuOpenLinks.classList.add(OPEN_CLASSNAME);
    navLinks.classList.remove(HIDE_CLASSNAME);
  }
}

// Клік поза випадаючим меню, закриття меню
document.addEventListener("click", function (e) {
  const dropdown = document.querySelector(".dropdown");
  if (!dropdown.contains(e.target)) {
    const dropdownContent = dropdown.querySelector(".dropdown-content");
    dropdownContent.style.display = "none";
  }
});

const dropdownBtn = document.querySelector(".hero__buttons");
dropdownBtn.addEventListener("click", function () {
  const dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }
});
