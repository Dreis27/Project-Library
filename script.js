let myLibrary = [];

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function addBookToLibrary(book){
    myLibrary.unshift(book);
}

function displayBooks(booksArray) {
    const container = document.getElementById('booksContainer');
    container.innerHTML = ''; 
    
    booksArray.forEach((book, index) => {
        const bookDiv = document.createElement('div');
        bookDiv.className = 'book';
    
        const title = document.createElement('div');
        title.className = 'book-title';
        title.textContent = book.title;
    
        const author = document.createElement('div');
        author.className = 'book-author';
        author.textContent = "Author: " + book.author;
    
        const pages = document.createElement('div');
        pages.className = 'book-pages';
        pages.textContent = "Pages: " + book.pages;
    
        const readButton = document.createElement('button');
        readButton.className = `read-button ${book.read ? 'read' : 'unread'}`;
        readButton.textContent = book.read ? "Read" : "Unread";
            
        readButton.addEventListener('click', function() {

            myLibrary[index].read = !myLibrary[index].read;

            readButton.classList.toggle('read');
            readButton.classList.toggle('unread');
            readButton.textContent = myLibrary[index].read ? "Read" : "Unread";
            });

        const removeButton = document.createElement('button');
        removeButton.className = 'removeBtn';
        removeButton.textContent = "Delete book";
        removeButton.addEventListener('click', function() {
            myLibrary.splice(index, 1);
            displayBooks(myLibrary);
        });

    
        bookDiv.appendChild(title);
        bookDiv.appendChild(author);
        bookDiv.appendChild(pages);
        bookDiv.appendChild(readButton);
        bookDiv.appendChild(removeButton);
            
        container.appendChild(bookDiv);
        });
    }

document.getElementById('addBookBtn').addEventListener('click', function() {
    document.getElementById('bookFormPopup').style.display = 'block';

    const form = document.getElementById('bookForm');
    form.reset();
});

document.getElementById('closePopupBtn').addEventListener('click', function() {
    document.getElementById('bookFormPopup').style.display = 'none';
});

document.getElementById('bookForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const newBook = {
        title: document.getElementById('bookTitle').value,
        author: document.getElementById('bookAuthor').value,
        pages: parseInt(document.getElementById('bookPages').value, 10),
        read: document.getElementById('bookRead').checked
    };

    addBookToLibrary(newBook);

    document.getElementById('booksContainer').innerHTML = ''; 
    displayBooks(myLibrary); 
    document.getElementById('bookFormPopup').style.display = 'none';
});


displayBooks(myLibrary);