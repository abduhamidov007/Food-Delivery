let hamburgerBtn = document.getElementsByClassName("navbar-right__hamburger")[0];
let navbarLinks = document.getElementsByClassName("navbar-right__links")[0];
let searchBar = document.getElementsByClassName("navbar-left__search")[0];
let categoriesItem = document.querySelectorAll(".categories__item");


hamburgerBtn.addEventListener("click", function () {
  navbarLinks.classList.toggle("active");
  searchBar.classList.toggle("active");
});


categoriesItem.forEach((item) => {
  item.addEventListener("click", function () {
    item.classList.toggle("cursorActive");
  });
});
