const collapsible = document.querySelector(".collapsible");
collapsible.addEventListener("click", function () {
  this.classList.toggle("collapsible--expanded");
});

window.addEventListener("scroll", handleScroll);

const navBar = document.querySelector(".navbar");
const hero = document.querySelector(".hero");
const content = document.querySelector(".content");

function handleScroll() {
  if (window.scrollY > hero.offsetHeight) {
    navBar.classList.add("sticky");
    content.classList.add("sticky-content");
    collapsible.classList.remove("collapsible--expanded");
  } else {
    navBar.classList.remove("sticky");
    content.classList.remove("sticky-content");
  }
}
