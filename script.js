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

book1 = new Book("Title : Lord of The Rings", "Author : J.R.R Tolkien", "384 Pages", "yes")
book2 = new Book("Title : 1984", "Author : George Orwell", "425 Pages", "no" )
book3 = new Book("Title : Blood Meridian", " Author : Cormac McCarthy", "351 Pages", "no" )
book4 = new Book("Title : Crime and Punishment", " Author : Fyodor Dostoevsky", "624 Pages", "yes")


addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);

const book_container = document.querySelector(".book-container");



const submit = document.querySelector("#submit");
submit.addEventListener("click",(Event)=>{
    Event.preventDefault();
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let numberOfPages = document.querySelector("#numberOfPages").value;

 
        let read = document.querySelector("#read").value;
    

    
    console.log(title);

    console.log(author);
    console.log(numberOfPages);
    
    
    
    
    myLibrary[myLibrary.length]= new Book(title, author, numberOfPages,read)
    console.log(myLibrary);
    

        const book = myLibrary[myLibrary.length-1];
        const card = document.createElement("div");
        card.classList.add("card");
        book_container.appendChild(card);
        const book_info = document.createElement("div");
        book_info.classList.add("book-info");
    
        card.appendChild(book_info);
    
        for (const key in book) {
    
            if (book.hasOwnProperty(key)) {
                const element = book[key];  
                const div = document.createElement("div");
                if (element=="yes") {
                    div.textContent="read"
                }
                else if (element=="no")
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
    

})

for (let index = 0; index < myLibrary.length; index++) {
    const book = myLibrary[index];
    const card = document.createElement("div");
    card.classList.add("card");
    book_container.appendChild(card);
    const book_info = document.createElement("div");
    book_info.classList.add("book-info");

    card.appendChild(book_info);

    for (const key in book) {

        if (book.hasOwnProperty(key)) {
            const element = book[key];  
            const div = document.createElement("div");
            if (element=="yes") {
                div.textContent="read"
            }
            else if (element=="no")
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