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