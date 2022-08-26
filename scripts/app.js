// Dummy Data

let dummyData = [
    { 
        id: 1,
        title: 'Harry Potter and the Sorcerer\'s Stone',
        author: 'JK Rowling',
        pages: 309,
        read: true
    },
    { 
        id: 2,
        title: 'The Fellowship of the Ring',
        author: 'JRR Tolking',
        pages: 500,
        read: true
    }
];

// Data management

class Book {
    constructor(id, title, author, pages, read) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        let newBook = new Book(book.id, book.title, book.author, book.pages, book.read);
        this.books.push(newBook);
    } 

    removeBookFromCollection(id) {
        this.books = this.books.filter((book) => book.id !== id)
    }

    toggleRead(id) {
        let bookIndex = this.books.findIndex(book => book.id == id);
        this.books[bookIndex].read = !this.books[bookIndex].read;
    }
}

let myLibrary = new Library;

// DOM functions

function deleteBook(e) {

    // num from id is the same as book object's id
    let bookId = parseInt(e.target.id.split('-')[1]);
    myLibrary.removeBookFromCollection(bookId);
    
    cleanLibrary();
    loadBooksForDOM(myLibrary.books);
}


function changeBookStatus(e) {

    // num from id is the same as book object's id
    let bookId = parseInt(e.target.id.split('-')[1]);
    myLibrary.toggleRead(bookId);


    let readClass = myLibrary.books.find((book) => book.id === bookId).read
        ? 'done_all' 
        : 'access_time';
    document.getElementById(e.target.id).textContent = readClass;
}
    

function addBookToDOM(book) {
    let readClass = book.read ? 'done_all' : 'access_time';

    const listedItem = generateDomElement('li', 'collection-item avatar', '', book.id);
    const readIcon   = generateDomElement('i', 'material-icons circle toggle-read', readClass, `isread-${ book.id}`);
    const paragraph1 = generateDomElement('p', 'title', book.title, `first-p-${ book.id}`);
    const paragraph2 = generateDomElement('p', 'secondary-title', book.author, `second-p-${ book.id}`);
    const paragraph3 = generateDomElement('p', 'secondary-title', book.pages, `third-p-${ book.id}`);
    const deleteIcon = generateDomElement('i', 'material-icons delete-icon', 'delete', `delete-${ book.id}`);

    // add toggle read functionality to icon
    readIcon.addEventListener('click', changeBookStatus);
    
    // add remove book functionality to icon
    deleteIcon.addEventListener('click', deleteBook);

    document.getElementById('book-list').append(listedItem);
    document.getElementById(book.id).append(readIcon);
    document.getElementById(book.id).append(paragraph1);
    document.getElementById(book.id).append(paragraph2);
    document.getElementById(book.id).append(paragraph3);
    document.getElementById(book.id).append(deleteIcon);    
}

function loadBooksForDOM(books) {
    books.forEach((book) => addBookToDOM(book));
    document.querySelectorAll('.delete-book').forEach((deleteBtn) => deleteBtn.addEventListener('click', removeFromLibrary));
}

function generateDomElement(type, classList, textContent, id) {
    let domElement = document.createElement(type);
    domElement.classList = classList;
    domElement.textContent = textContent;
    domElement.id = id;
    return domElement;
}

function addBookToLibrary() {
    let id = myLibrary.books.length > 0 ? myLibrary.books[myLibrary.books.length - 1].id + 1 : 1;
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = parseInt(document.getElementById('pages').value);
    let read = document.getElementById('is-read').checked;

    let book = {
        id,
        title,
        author,
        pages,
        read,
    };

    // save in collection of objects - library
    myLibrary.addBook(book);

    // print in DOM
    addBookToDOM(book);
}

function cleanLibrary() {
    document.querySelector('#book-list').innerHTML = '';
}

window.addEventListener('DOMContentLoaded', () => {
    myLibrary.addBook(dummyData[0]);
    myLibrary.addBook(dummyData[1]);
    loadBooksForDOM(myLibrary.books);
});



