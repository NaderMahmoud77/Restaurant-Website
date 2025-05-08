// window load
let preload = document.querySelector(".preload");

window.addEventListener("load", () => {
  preload.classList.add("loadid");
  document.body.classList.add("loaded");
});

// show nav-bar
let element = document.querySelectorAll("[data-toggle]");
let navBar = document.querySelector(".nav-bar");
let overlay = document.querySelector(".overlay");

let showNav = (element, events, callback) => {
  for (let i = 0; i < element.length; i++) {
    element[i].addEventListener(events, callback);
  }
};

let toggle = () => {
  navBar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

showNav(element, "click", toggle);

// slider image
let sliderHero = document.querySelectorAll("[data-hero-slider] .slider-item");
let prev = document.querySelector("[data-btn-prev]");
let next = document.querySelector("[data-btn-next]");
let sliderItem = sliderHero[0];
let currnt = 0;

let slider = () => {
  sliderItem.classList.remove("active");
  sliderHero[currnt].classList.add("active");
  sliderItem = sliderHero[currnt];
};

// when click button Next
function btnNext() {
  if (currnt >= sliderHero.length - 1) {
    currnt = 0;
  } else {
    currnt++;
  }
  slider();
}
next.addEventListener("click", btnNext);

// when click button Prev
function btnPrev() {
  if (currnt <= 0) {
    currnt = sliderHero.length - 1;
  } else {
    currnt--;
  }
  slider();
}
prev.addEventListener("click", btnPrev);

let setInt;
let interVal = () => {
  setInt = setInterval(() => {
    btnNext();
  }, 7000);
};

// when moseover and mouseout on btnNext and btnPrev
showNav([next, prev], "mouseover", () => {
  clearInterval(setInt);
});
showNav([next, prev], "mouseout", interVal);

// when loaded a window
window.addEventListener("load", interVal);

// add class active to Header
let header = document.querySelector(".header");
let backTop = document.querySelector(".backTop");
// console.log(header)
let lengthScroll = 0;

let scrollBy = () => {
  let scrollBottom = lengthScroll < window.scrollY;
  if (scrollBottom) {
    header.classList.add("hid");
  } else {
    header.classList.remove("hid");
  }
  lengthScroll = window.scrollY;
};

window.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    backTop.classList.add("active");
    scrollBy();
  } else {
    header.classList.remove("active");
    backTop.classList.remove("active");
  }
});

// ////////

let parallax = document.querySelectorAll("[data-paramllax-item]");
let x, y;

window.addEventListener("mousemove", (event) => {
  x = (event.clientX / window.innerWidth) * 10;
  y = (event.clientY / window.innerHeight) * 10;

  x -= x * 2;
  y -= y * 2;

  for (let i = 0; i < parallax.length; i++) {
    parallax[i].style.transform = `translate(${x}px , ${y}px )`;
  }
});
