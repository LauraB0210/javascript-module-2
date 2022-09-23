const myPage = document.querySelector("#blueBtn");
myPage.addEventListener("click", cambioColor);

function cambioColor (){
let myElement = document.querySelector(".btn-lrg");
myElement.style.backgroundColor = "#ffa500";
}

const myPage1 = document.querySelector("#blueBtn");
myPage1.addEventListener("click", cambioColor1);

function cambioColor1 (){
let myElement1 = document.querySelector(".jumbotron");
myElement1.style.backgroundColor = "#588fbd";
}

const myPage2 = document.querySelector("#blueBtn");
myPage2.addEventListener("click", cambioColor2);

function cambioColor2 (){
    let myElement2  = document.querySelector(".btn-secondary");
    myElement2.style.backgroundColor = "black"
    myElement2.style.color = "white"
}

const myOrange = document.querySelector("#orangeBtn");
myOrange.addEventListener("click", cambioColorO);

function cambioColorO (){
    let myOrange = document.querySelector(".jumbotron");
    myOrange.style.backgroundColor = "#f0ad4e"
}

