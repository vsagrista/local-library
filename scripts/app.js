let myLibrary = [
    { 
        title: 'Harry Potter and the Sorcerer\'s Stone',
        author: 'JK Rowling',
        pages: 309,
        read: true
    },
    { 
        title: 'The Fellowship of the Ring',
        author: 'JRR Tolking',
        pages: 500,
        read: true
    }
];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function addBookToLibrary() {

    let title = this.event.target.elements[0].value;
    let author = this.event.target.elements[1].value;
    let pages = this.event.target.elements[2].value;
    let read = this.event.target.elements[3].checked

    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

    cleanLibrary();
    loadLibrary();
}

function cleanLibrary() {
    document.querySelector('#book-list').innerHTML = '';
}

function loadLibrary() {
    myLibrary.forEach((book) => {
        let listedItem = document.createElement( 'html' );
        listedItem.innerHTML = `<li class="collection-item avatar"><i class="material-icons circle">done_all</i>
                    <span class="title">${ book.title }</span>
                    <p>${ book.author }<br>
                    Pages: ${ book.pages }
                    </p>
                    <a href="#!" class="secondary-content"><i class="material-icons">delete</i></a>
                </li>`
        document.querySelector('#book-list').append(listedItem);
    })
}

window.addEventListener('DOMContentLoaded', () => {
    loadLibrary();
});


