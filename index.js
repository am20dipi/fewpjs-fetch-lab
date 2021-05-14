function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
    .then(resp => resp.json())
    .then(json => renderBooks(json))
    // fetch request to the URL of GoT API
    // after we call .then() on the fetched api
    // .then() asks the response to be converted to json
    // .then() returns a Promise -- the Promise will be exposed subsequently to the next .then()
    // the final .then() sets the json object to the function renderBooks
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
  // we declare a function renderBooks, takes in an arg of books.
  // we declare and assign a const main and go into the doc to select all elements with the id "main"
  // we iterate over each instance of book 
  // for each book, we declare and assign a variable h2 by going into the doc and creating the element h2 in the html/DOM
  // for each book, we set the innerHTML of any h2 to equal the book's name
  // we append h2 onto its parent element "main"
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
  // create an event listener; takes in 2 arguments, (1) the event, (2) callback function
  // the event = "DOMContentLoaded"
  // callback function = "fetchBooks"
  // so once the DOMCL is loaded, we are telling the app to immediately run the function fetchBooks
});
