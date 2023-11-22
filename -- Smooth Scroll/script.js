const links = document.querySelectorAll(".nav-list li a");

for (link of links) {
  link.addEventListener("click", smoothScroll);
}

function smoothScroll(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
  });
  hideMenu();
}


// Sticky Header
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})



// Active Menu Switcher 
const navList = document.querySelector(".nav-list");

navList.addEventListener("click", (e) => {
  const navItem = e.target.parentElement;
  if (navItem.classList.contains("link")) {
    const activeItem = navList.querySelector(".active");
    if (activeItem) {
      activeItem.classList.remove("active");
    }
    navItem.classList.add("active");
  }
});



// Scroll to Top
const scrollBtn = document.querySelector(".top");
const rootEl = document.documentElement;

document.addEventListener("scroll", showBtn);
scrollBtn.addEventListener("click", scrollToTop)

function showBtn() {
  const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight;

  if (rootEl.scrollTop / scrollTotal > 0.3) {
    scrollBtn.classList.add("show-btn");
  } else {
    scrollBtn.classList.remove("show-btn");
  }
}


function scrollToTop() {
  rootEl.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}


// Mobile Responsive View
const menu = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");



const showMenu = () => {
  hamburger.style.display = "none";
  close.style.transform = "translateY(0)";
  menu.style.transform = "translateY(0)";
};



const hideMenu = () => {
  close.style.transform = "translateY(-20rem)";
  hamburger.style.display = "block";
  menu.style.transform = "translateY(-200%)";

}
hamburger.addEventListener("click", showMenu);
close.addEventListener("click", hideMenu);
