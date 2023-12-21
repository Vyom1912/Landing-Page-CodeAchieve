burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
navList = document.querySelector(".nav-list");
btn = document.querySelector(".btn-main");

burger.addEventListener("click", () => {
  btn.classList.toggle("v-class-resp");
  navList.classList.toggle("v-class-resp");
  navbar.classList.toggle("h-nav-resp");
});
