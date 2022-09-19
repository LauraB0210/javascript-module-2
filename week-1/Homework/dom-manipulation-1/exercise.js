/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
const list = document.querySelectorAll("p");
    console.log(list);

const firstDiv  = document.querySelector("div");
    console.log(firstDiv);

const jumboTromText = document.querySelector("#jumbotron-text");
    console.log(jumboTromText);


const allTheP = document.querySelectorAll(".primary-content p");
    console.log(allTheP);


/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

const myButton = document.querySelector("#alertBtn");
myButton.addEventListener("click", alertSaludo);

function alertSaludo(){
    alert("Thanks for visiting Bikes for Refugees!");
}

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

const myPage = document.querySelector("#bgrChangeBtn");
myPage.addEventListener("click", cambioColor);

function cambioColor (){
let myElement = document.querySelector("#body");
myElement.style.backgroundColor = "pink";
}


/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/

 let moreInfo = document.querySelector("#addTextBtn");
 moreInfo.addEventListener("click", parrafo);

 
function parrafo() {
const node = document.createElement("p");
const textnode = document.createTextNode("LEARN MORE");
node.appendChild(textnode);
document.getElementById("mainArticles").appendChild(node);

}

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

const myLinks = document.querySelector("#largerLinksBtn");
myLinks.addEventListener("click", cambioLetra);

function cambioLetra (){
let links = document.querySelectorAll("a");
function cambiaLetraElemento(e){ e.style.fontSize = "x-large";}
links.forEach(cambiaLetraElemento)
}


/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/


 let moreInfo2 = document.querySelector("#addArticleBtn");
 moreInfo2.addEventListener("click", parrafo);

 
function parrafo() {
const node = document.createElement("p");
const textnode = document.createTextNode( );
node.appendChild(textnode);
document.getElementById("mainArticles").appendChild(node);
}

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

// const myPage2 = document.querySelector("#bgrChangeBtn");
// myPage2.addEventListener("click", cambioColor2);

// function cambioColor2 (){
// let myElement = document.querySelector("#body");
// myElement.style.backgroundColor = "pink";

// }


const colors = ["#EEDBF4", "#F09CE2", " #ff99c2", "#ddff99", "#ffff99"];
const backGroundColor = document.querySelector("#body");
let i = 0;
bgrChangeBtn.addEventListener("click", () => {
    backGroundColor.style.backgroundColor = colors[i]
    if (i < colors.length - 1) {
        i++;
    } else {
        i = 0;
    }
})