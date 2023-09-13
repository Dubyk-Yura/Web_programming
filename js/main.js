const HIDE_CLASSNAME= "hide";
const OPEN_CLASSNAME = "open";

const navLinks = document.querySelector("#header__nav");
const loginLinks = document.querySelector("#header__login");
const registerLinks =document.querySelector("#header__register");
const logoLinks =document.querySelector("#header__logo");


function toggleMenu() {
  if (navLinks.classList.contains(OPEN_CLASSNAME)) {
    navLinks.classList.remove(OPEN_CLASSNAME);
    loginLinks.classList.remove(HIDE_CLASSNAME);
    registerLinks.classList.remove(HIDE_CLASSNAME);
    logoLinks.classList.remove(HIDE_CLASSNAME);
  } else {
    navLinks.classList.add(OPEN_CLASSNAME);
    loginLinks.classList.add(HIDE_CLASSNAME);
    registerLinks.classList.add(HIDE_CLASSNAME);
    logoLinks.classList.add(HIDE_CLASSNAME);
  }
}
