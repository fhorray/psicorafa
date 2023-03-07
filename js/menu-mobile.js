const menuBtn = document.querySelector(".js-menu-hamburguer");
const menuMobile = document.querySelector(".js-menu-mobile");

function menuClick() {
  menuMobile.classList.toggle("menu-shown");
}

menuBtn.addEventListener("click", menuClick);

// JS MEDIA-QUERIES
const mediaQuery = window.matchMedia("(min-width: 900px)");

const handleMediaQuery = function (event) {
  if (event.matches) {
    if (menuMobile.classList.contains("menu-shown")) {
      menuMobile.classList.remove("menu-shown");
    }
  }
};

mediaQuery.addListener(handleMediaQuery);

handleMediaQuery(mediaQuery);
