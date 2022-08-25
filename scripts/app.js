let myLibrary = [
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

const listHtmlContent = (book) => (`<i class="material-icons circle">done_all</i><span class="title">${ book.title }</span><p>${ book.author }<br>Pages: ${ book.pages }</p><a href="#!" class="secondary-content delete-book"><i class="material-icons">delete</i></a>`);

class Book {
    constructor(id, title, author, pages, read) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function addBookToLibrary() {
    let id = myLibrary.length + 1;
    let title = this.event.target.elements[0].value;
    let author = this.event.target.elements[1].value;
    let pages = this.event.target.elements[2].value;
    let read = this.event.target.elements[3].checked

    let newBook = new Book(id, title, author, pages, read);
    myLibrary.push(newBook);

    cleanLibrary();
    loadLibrary();
}

function removeFromLibrary() {
    myLibrary = myLibrary.filter((item) => item.id !== parseInt(this.parentElement.id));

    cleanLibrary();
    loadLibrary();
}

function cleanLibrary() {
    document.querySelector('#book-list').innerHTML = '';
}

function loadLibrary() {
    myLibrary.forEach((book) => {
        let listedItem = document.createElement( 'li' );
        listedItem.classList = 'collection-item avatar';
        listedItem.id = book.id;
        listedItem.innerHTML = listHtmlContent(book);
        document.querySelector('#book-list').append(listedItem);
    })
    document.querySelectorAll('.delete-book').forEach((deleteBtn) => deleteBtn.addEventListener('click', removeFromLibrary));
}

window.addEventListener('DOMContentLoaded', () => {
    loadLibrary();
});


