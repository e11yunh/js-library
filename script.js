const myLibrary = [];
const added_books = [];

function Book(title, author, pages, publish, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.publish = publish;
    this.read = read;
}

function addBookToLibrary(selected_book) {
    myLibrary.push(selected_book);
}

function add_book() {
    const add_container = document.querySelector("#form-container");
    const container = document.querySelector("#container");
    const submit_btn = document.querySelector("#submit-btn");
    const cancel_btn = document.querySelector("#cancel-btn");
    const form = document.querySelector("#add_form");

    add_container.classList.remove("invisible");
    container.classList.add("blur");

    cancel_btn.addEventListener("click", function() {
        add_container.classList.add("invisible");
        container.classList.remove("blur");
        form.reset();
    })

    submit_btn.addEventListener("click", function() {
        add_container.classList.add("invisible");
        container.classList.remove("blur");
    })
}

function submit_book() {
    const form = document.querySelector("#add_form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const title = document.querySelector("#book_title").value;
        const author = document.querySelector("#book_author").value;
        const pages = document.querySelector("#book_pages").value;
        const publish = document.querySelector("#publish_date").value;
        const read_status = document.querySelector("#book_status").value;

        const newBook = new Book(title, author, pages, publish, read_status);
        addBookToLibrary(newBook);
        console.log(myLibrary);

        generate_book(myLibrary);
        generate_book_cards();

        form.reset();
    })
};

function generate_book(library) {
    const cards_container = document.querySelector("#cards-container");

    for (const book of library) {
        if (!added_books.includes(book)) {
            const bookCardHTML = `
            <div class="card ${book.read === 'read' ? 'read' : ''}">
                <div class="card-info well-shadow">
                    <h2>${book.title}</h2>
                    <h3>${book.author}</h3>
                    <h4>${book.publish}</h4>
                    <h4>${book.pages} Pages</h4>
                </div>
                <div id="btn-container">
                    <button>Read</button>
                    <button>Delete</button>
                </div>
            </div>
        `;
        added_books.push(book);
        cards_container.insertAdjacentHTML("beforeend", bookCardHTML);
        };
    };

};


function generate_book_cards() {
    const all_books = document.querySelectorAll(".card");
    const all_btn = document.querySelectorAll("#btn-container");
    const add_btn = document.querySelector("#add-btn");

    all_btn.forEach(container => {
    const del_btn = container.children[1];

    del_btn.style.backgroundColor = "hsl(353, 80%, 80%)";
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

function initialise_library() {
    generate_book_cards();
    submit_book();
};

initialise_library();