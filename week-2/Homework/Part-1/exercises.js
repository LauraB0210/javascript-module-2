/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */
function exerciseOne(arrayOfPeople) {
  let content = document.querySelector("#content");
  arrayOfPeople.forEach((personas) => {
    const nombre = document.createElement("h1");
    const trabajo = document.createElement("h2");

    nombre.textContent = personas.name;
    trabajo.textContent = personas.job;  

    content.appendChild(nombre);
    content.appendChild(trabajo);

    
  });
}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
  const lista = document.createElement("ul");
  content.appendChild(lista);

  shopping.forEach((cosas) => {
    const item = document.createElement("li");
    item.textContent = cosas;

    lista.appendChild(item);

  })
}

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
function exerciseThree(books) {
  const listaLibros = document.createElement("ul");

  books.forEach(libros => {
    const boxForBook = document.createElement("li");
    const bookName = document.createElement("p");
    bookName.textContent = libros.title + "-" + libros.author;
    const portadasLibros =document.createElement("img");
    portadasLibros.setAttribute("src", libros.img);
    boxForBook.appendChild(bookName);
    boxForBook.appendChild(portadasLibros);
    listaLibros.appendChild(boxForBook);

    if (libros.alreadyRead){
      boxForBook.style.backgroundColor = "green"
    }

    else {
      boxForBook.style.backgroundColor = "red"
    }
  })
  content.appendChild(listaLibros);
}

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    img: "https://images.cdn2.buscalibre.com/fit-in/360x360/d2/87/d28753516bb9819d77a77a19431251fb.jpg",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    img: "https://images-na.ssl-images-amazon.com/images/I/51iSxrqL+sL.jpg",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    img: "https://m.media-amazon.com/images/I/51W1sBPO7tL._SX380_BO1,204,203,200_.jpg",
    alreadyRead: true
  }
];

exerciseThree(books);
