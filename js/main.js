// Select hamburger menu
const menuBtn = document.querySelector(".navigation__button");

// Select navigation menu
const menu = document.querySelector(".navigation__menu");

// Select navigation menu list
const list = document.querySelector(".navigation__list");

// Select navigation list links
const menuLinks = document.querySelectorAll(".navigation__link");

const showMenu = () => {
  menuBtn.classList.toggle("navigation__button--active");
  const expanded = menuBtn.getAttribute("expanded");
  menuBtn.setAttribute("aria-expanded", !expanded);
  list.hidden = !list.hidden;
  menu.classList.toggle("navigation__menu--active");
};

menuBtn.addEventListener("click", showMenu);

menuLinks.forEach(v => {
  v.addEventListener("click", showMenu);
});
