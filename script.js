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

addBookToLibrary(book1);
addBookToLibrary(book2);


function initialise_library() {
    generate_book_cards();
};


function add_book() {
    const add_container = document.querySelector("#form-container");
    const container = document.querySelector("#container");
    const submit_btn = document.querySelector("#submit-btn");
    const cancel_btn = document.querySelector("#cancel-btn");

    add_container.classList.remove("invisible");
    container.classList.add("blur");

    cancel_btn.addEventListener("click", function() {
        add_container.classList.add("invisible");
        container.classList.remove("blur");
    })

    submit_btn.addEventListener("click", function() {
        add_container.classList.add("invisible");
        container.classList.remove("blur");
    })
}

function generate_book_cards() {
    const all_books = document.querySelectorAll(".card");
    const all_btn = document.querySelectorAll("#btn-container");
    const add_btn = document.querySelector("#add-btn");

    all_btn.forEach(container => {
    const del_btn = container.children[1];

    del_btn.style.backgroundColor = "hsl(353, 50%, 80%)";
    })

    add_btn.addEventListener("click", add_book);

    all_books.forEach(book => {
        const btn_container = book.querySelector("#btn-container");
        const read_btn = btn_container.children[0];
        const del_btn = btn_container.children[1];

        if (book.classList.contains("read")) {
            read_btn.textContent = "Unread";
            read_btn.style.backgroundColor = "hsl(81, 70%, 75%)";
        };

        read_btn.addEventListener("click", function(e) {
            book.classList.toggle("read");
    
            check_read_status(e.currentTarget);
        })

        del_btn.addEventListener("click", function(e) {
            e.target.closest(".card").remove()
        });
    });
}


function check_read_status(target) {
    
    const unread_color = "hsl(81, 70%, 75%)";
    const read_color = "hsl(175, 55%, 75%)";

    const parent_card = target.closest(".card");

    if (parent_card.classList.contains("read")) {
    target.textContent = "Unread";
    target.style.backgroundColor = unread_color;
    } else {
        target.textContent = "Read";
        target.style.backgroundColor = read_color; 
    }
};

initialise_library();