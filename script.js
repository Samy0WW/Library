const myLibrary = [];

function Book(title, author, numberOfPages, read) {
  // the constructor...
    this.title=title;
    this.author=author;
    this.numberOfPages=numberOfPages;
    this.read=read;
}

function addBookToLibrary(book) {
    myLibrary.push(book)
    // take params, create a book then store it in the array
}

book1 = new Book("Title : Lord of The Rings", "Author : J.R.R Tolkien", "384 Pages", true)
book2 = new Book("Title : 1984", "Author : George Orwell", "425 Pages", false )
book3 = new Book("Title : Blood Meridian", " Author : Cormac McCarthy", "351 Pages", false )
book4 = new Book("Title : Crime and Punishment", " Author : Fyodor Dostoevsky", "624 Pages", true)


addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
const book_container = document.querySelector(".book-container");

for (let index = 0; index < myLibrary.length; index++) {
    const book = myLibrary[index];
    const card = document.createElement("div");
    book_container.appendChild(card);
    const book_info = document.createElement("div");
    book_info.classList.add("book-info");

    card.appendChild(book_info);

    for (const key in book) {

        if (book.hasOwnProperty(key)) {
            const element = book[key];  
            const div = document.createElement("div");
            if (element===true) {
                div.textContent="read"
            }
            else if (element===false)
            {
                div.textContent="not read yet"
            }
            else
            {
                div.textContent = element;
            }

            book_info.appendChild(div);
        }
    }
 


    
    
}

    

console.log(myLibrary);

