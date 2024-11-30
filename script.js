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


book1 = new Book("James Hurt", "Leslie ing", 172, true)
book2 = new Book("Ironic Star", "Love is Terrible", 999, false)

addBookToLibrary(book1)
addBookToLibrary(book2)


const read_books = document.querySelectorAll(".read");

read_books.forEach(book => {
    const btnContainer = book.nextElementSibling;

    const readButton = btnContainer.children[0];
    readButton.textContent = "Unread";
    readButton.style.backgroundColor = "hsl(81, 40%, 70%)";

    book.closest(".card").style.boxShadow = 'inset 0 9px 0 hsl(81, 88%, 80%), 2px 3px 2px hsla(0, 0%, 0%, 0.45)';
});
