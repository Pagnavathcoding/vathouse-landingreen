const bar = document.getElementById("bar");
const close = document.getElementById("close");
const menu = document.getElementById("menu");
const body = document.querySelector("body");
// click on bar to show menu
bar.addEventListener("click", showMenu);
// click on close to hide menu
close.addEventListener("click", hideMenu);
// function of showing menu
function showMenu(){
    menu.classList.add("show-menu-when-click-bar");
    body.classList.add("stuck");
}
// function of hiding menu
function hideMenu() {
    menu.classList.remove("show-menu-when-click-bar");
    body.classList.remove("stuck");
}