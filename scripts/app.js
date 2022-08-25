let myLibrary = [];

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
    loadLibrary();
}

function loadLibrary() {
    // load from array
    console.log('loading library', myLibrary)
}


