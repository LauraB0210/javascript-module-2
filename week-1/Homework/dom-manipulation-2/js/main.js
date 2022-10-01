
const myPage = document.querySelector("#blueBtn");
myPage.addEventListener("click",()=> {
    let myElement = document.querySelector(".btn-lrg");
myElement.style.backgroundColor = "#ffa500";

let myElement1 = document.querySelector(".jumbotron");
myElement1.style.backgroundColor = "#588fbd";

let myElement2  = document.querySelector(".btn-secondary");
     myElement2.style.backgroundColor = "black"
     myElement2.style.color = "white"
});

const myOrange = document.querySelector("#orangeBtn");
myOrange.addEventListener("click",() => {

    let myOrange = document.querySelector(".jumbotron");
     myOrange.style.backgroundColor = "#f0ad4e"

     let myOrange1 = document.querySelector(".btn-lrg");
     myOrange1.style.backgroundColor = "#5751fd"

      let myOrange2 = document.querySelector(".btn-secondary");
     myOrange2.style.backgroundColor = "#31b0d5"
     myOrange2.style.color = "white"

});


 const myGreen = document.querySelector("#greenBtn");
 myGreen.addEventListener("click",() => {

    let myGreen = document.querySelector(".jumbotron");
     myGreen.style.backgroundColor = "#87ca8a"

     let myGreen1 = document.querySelector(".btn-lrg");
     myGreen1.style.backgroundColor = "black"

     let myGreen2 = document.querySelector(".btn-secondary");
     myGreen2.style.backgroundColor = "#8c9c08"

 });


//parte2//

const botonsubmit = document.querySelector("#btn-submit");
botonsubmit.addEventListener("click", verificacion);

function verificacion (event){
    event.preventDefault();
   let exito = 1;

    //paso 1 : validar el campo de correo//


 function validar_email( email ) 
 {
     const regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
     return regex.test(email) ? true : false;
 }

  if( validar_email( ) )
  {
      alert("El email es correcto");
  }
  else
  {
      alert("El email NO es correcto");
     
  }

 

    //paso 2: validar el campo de nombre//
    const name = document.querySelector("#example-text-input");
    const namelength = name.value.length;
    if (namelength == 0) {
        exito = 0;
        name.style.backgroundColor = "red";
  
    }


    //paso 3: validar el campo de descripcion//

     const namedesc = document.querySelector("#exampleTextarea");
    const namelengthdesc = namedesc.value.length;
    if (namelengthdesc == 0) {
        exito = 0;
         namedesc.style.backgroundColor = "red";
  
    }

    //paso 4: si todo va bien, mostrar una alerta y vaciar el formulario//
   if (exito ==1) {
        alert("Thanks for visiting Bikes for Refugees!");

        const formulary = document.querySelector("#form-registro");
         formulary.reset();

   } 
   

}







