const hamburgerIcon = document.querySelector('.hamburger-icon');
const closeIcon = document.querySelector('.close-icon');
const buttons = document.querySelectorAll('.desktop-button');

const mobile_menu = document.querySelector(".mobile-menu");

header_resize();

window.onresize = header_resize;
function header_resize(){

    if (window.innerWidth <= 800) {
        hamburgerIcon.style.display = 'flex';
        buttons.forEach(function(desktop_button) {
            desktop_button.style.display = 'none';
        });
    } else {
        hamburgerIcon.style.display = 'none';
        buttons.forEach(function(desktop_button) {
            desktop_button.style.display = 'inline-block';
            if (mobile_menu.classList.contains("active")) {
                mobile_menu.classList.remove("active");
            }
        });
    }
}

hamburgerIcon.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

closeIcon.addEventListener("click", () => {
    hamburgerIcon.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });

var nav_accent = document.getElementsByClassName("nav-accent");
var page = document.getElementsByClassName("page");

Array.from(page).forEach((element, index) => {
    element.addEventListener("mouseenter", () => {
        nav_accent[index].classList.add("nav-accent-active");
    });

    element.addEventListener("mouseleave", () => {
        if(!element.classList.contains("active")){
            nav_accent[index].classList.remove("nav-accent-active");
        }
    });
});