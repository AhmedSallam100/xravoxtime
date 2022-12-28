// Active Link

let links = document.querySelectorAll(".link");

links.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    links.forEach((ele) => {
      ele.classList.remove("active")
    })
    e.currentTarget.classList.add("active")
  })
})

// Open Menu

let hum = document.querySelector(".open-hum");
let menu = document.querySelector(".nav-menu")
let closem = document.querySelector(".close-menu")

hum.addEventListener("click", () => {
  menu.classList.add("active-2")
})

closem.addEventListener("click", () => {
  menu.classList.remove("active-2")
})

// Light On Sections

let main = document.querySelectorAll(".wrap .container");
let slide = document.querySelector(".links");
let slideA = document.querySelectorAll(".links .link");

function removeActive() {
  slideA.forEach((ele) => {
    ele.classList.remove("active-3");
    ele.classList.remove("active");
  });
}

window.addEventListener("scroll", () => {
  if (scrollY >= 0) {
    removeActive();
    slideA[0].classList.add("active-3");
  }
  if (scrollY >= main[1].offsetTop - 42) {
    removeActive();
    slideA[1].classList.add("active-3");
  }
  if (scrollY >= main[2].offsetTop - 42) {
    removeActive();
    slideA[2].classList.add("active-3");
  }
  if (window.scrollY >= main[3].offsetTop - 42) {
    removeActive();
    slideA[3].classList.add("active-3");
  }
  if (scrollY >= main[4].offsetTop - 42) {
    removeActive();
    slideA[4].classList.add("active-3");
  }
  if (scrollY >= main[5].offsetTop - 42) {
    removeActive();
    slideA[5].classList.add("active-3");
  }
});