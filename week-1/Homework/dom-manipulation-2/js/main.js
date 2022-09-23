const myPage = document.querySelector("#blueBtn");
myPage.addEventListener("click", cambioColor);

function cambioColor (){
let myElement = document.querySelector(".btn-lrg");
myElement.style.backgroundColor = "#ffa500";
}