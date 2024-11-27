const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(selected_book) {
    myLibrary.push(selected_book);
}


console.log(myLibrary)

book1 = new Book("James Hurt", "Leslie ing", 172, true)
book2 = new Book("Ironic Star", "Love is Terrible", 999, false)

addBookToLibrary(book1)
addBookToLibrary(book2)

console.log(myLibrary)