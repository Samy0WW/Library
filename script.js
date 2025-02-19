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
    let read = document.querySelector('input[name="read"]:checked').value;
    console.log(read);

    myLibrary[myLibrary.length]= new Book(title, author, numberOfPages,read);
    console.log(myLibrary);
    

        const book = myLibrary[myLibrary.length-1];
        const card = document.createElement("div");
        const book_info = document.createElement("div");
        const remove = document.createElement("button");

        remove.textContent="Remove Book";

        card.classList.add("card");
        book_info.classList.add("book-info");

        
        remove.classList.add("remove");
        remove.addEventListener("click",()=>{
            let index = myLibrary.indexOf(book);
            if (index>-1) {
                myLibrary.splice(index,1);
                console.log(myLibrary);
                card.remove();
            }
        })
        book_container.appendChild(card);
        card.appendChild(book_info);
   
        
        for (const key in book) {
    
            if (book.hasOwnProperty(key)) {
                const element = book[key];  
                const div = document.createElement("div");
                if (element=="yes") {
                    div.textContent="read";
                    div.style.color="green";
                    div.classList.add("read-or-not");
                }
                else if (element=="no")
                {
                    div.textContent="not read yet";
                    div.style.color="red";
                    div.classList.add("read-or-not");
                }
                else
                {
                    div.textContent = element;
                }
    
                book_info.appendChild(div);
            }
        }
    const readStatus = card.querySelector(".read-or-not");
    const toggleReadButton = document.createElement("button");
    toggleReadButton.textContent="Toggle Read";
    
    if (book.read=="yes") {
        toggleReadButton.style.backgroundColor="#FF4500";
    }
    else if (book.read=="no") {
        toggleReadButton.style.backgroundColor="green";
    }

    toggleReadButton.addEventListener("click", ()=>{
        if (book.read=="yes") {
            book.read="no";
            toggleReadButton.style.backgroundColor="green";
            readStatus.textContent="Not read yet";
            readStatus.style.color="red";
        }
        else if (book.read=="no"){
            book.read="yes";
            toggleReadButton.style.backgroundColor="#FF4500";
            readStatus.textContent="read";
            readStatus.style.color="green";
        }
    })
    card.appendChild(toggleReadButton);
    card.appendChild(remove);
})

for (let index = 0; index < myLibrary.length; index++) {
    const book = myLibrary[index];
    const card = document.createElement("div");
    const book_info = document.createElement("div");
    const remove = document.createElement("button");
 

    remove.textContent="Remove Book";


    card.classList.add("card");
    book_info.classList.add("book-info");
    remove.classList.add("remove");

    remove.addEventListener("click", ()=>{
        let index = myLibrary.indexOf(book);
        if (index>-1) {
            myLibrary.splice(index,1);
            console.log(myLibrary);
            card.remove();
        }
    })




    book_container.appendChild(card);
    card.appendChild(book_info);
  
   

    for (const key in book) {

        if (book.hasOwnProperty(key)) {
            const element = book[key];  
            const div = document.createElement("div");

            
            if (element=="yes") {
                div.textContent="read";
                div.style.color="green";
                div.classList.add("read-or-not");

            }
            else if (element=="no")
            {
                div.textContent="not read yet";
                div.style.color="red";
                div.classList.add("read-or-not");
            }
            else
            {
                div.textContent = element;
            }


            book_info.appendChild(div);



        }
    }

    const readStatus = card.querySelector(".read-or-not");
    const toggleReadButton = document.createElement("button");
    
    if (book.read=="yes") {
        toggleReadButton.style.backgroundColor="#FF4500";
    }
    else if (book.read=="no") {
        toggleReadButton.style.backgroundColor="green";
    }
    toggleReadButton.textContent="Toggle Read";
    
    toggleReadButton.addEventListener("click", ()=>{
        if (book.read=="yes") {
            book.read="no";
            toggleReadButton.style.backgroundColor="green";
            readStatus.textContent="Not read yet";
            readStatus.style.color="red";
        }
        else if (book.read=="no"){
            book.read="yes";
            toggleReadButton.style.backgroundColor="#FF4500";
            readStatus.textContent="read";
            readStatus.style.color="green";
            
        }
    })
    card.appendChild(toggleReadButton);
    card.appendChild(remove);
}