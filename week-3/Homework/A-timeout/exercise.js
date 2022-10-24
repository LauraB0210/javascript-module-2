/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds). Hint: try searching for setTimeout. (https://www.w3schools.com/jsref/met_win_settimeout.asp)




Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/

const myTimeout = setInterval(myGreeting, 5000)

function myGreeting (){
    const colorBody = document.querySelector("body")
    console.log(colorBody.style.backgroundColor);
    
    if (colorBody.style.backgroundColor == "yellow"){
        colorBody.style.backgroundColor = "pink"
    }

     else if (colorBody.style.backgroundColor == "pink"){
        colorBody.style.backgroundColor = "red"
    }

     else if (colorBody.style.backgroundColor == "red"){
        colorBody.style.backgroundColor = "yellow"
    }
    else if (! colorBody.style.backgroundColor){
        colorBody.style.backgroundColor = "yellow"
    }

    // if (colorBody.style.backgroundColor != "blue" && colorBody.style.backgroundColor != "pink" && colorBody.style.backgroundColor != "red"){
    //     colorBody.style.backgroundColor = "blue"
    // }


//     colorBody.style.backgroundColor = colorBody.style.backgroundColor == "blue" ? "pink" : "blue"
 }

function  pausaColor(){
    clearInterval(myTimeout);
}