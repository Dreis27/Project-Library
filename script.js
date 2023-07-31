let myLibrary = [    { title: "Book 1", author: "Author 1", pages: 300, read: true },
{ title: "Book 2", author: "Author 2", pagesC: 250, read: false },
{ title: "Book 2", author: "Author 2", pagesC: 250, read: false },
{ title: "Book 2", author: "Author 2", pagesC: 250, read: false },
{ title: "Book 2", author: "Author 2", pagesC: 250, read: false },
{ title: "Book 2", author: "Author 2", pagesC: 250, read: false },];

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
    
            bookDiv.appendChild(title);
            bookDiv.appendChild(author);
            bookDiv.appendChild(pages);
            bookDiv.appendChild(readButton);
            
            container.appendChild(bookDiv);
        });
    }

document.getElementById('addBookBtn').addEventListener('click', function() {
    document.getElementById('bookFormPopup').style.display = 'block';
});

document.getElementById('closePopupBtn').addEventListener('click', function() {
    document.getElementById('bookFormPopup').style.display = 'none';
});

document.getElementById('bookForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const newBook = {
        title: document.getElementById('bookTitle').value,
        author: document.getElementById('bookAuthor').value,
        pagesCount: parseInt(document.getElementById('bookPages').value, 10),
        read: document.getElementById('bookRead').checked
    };

    addBookToLibrary(newBook);

    document.getElementById('booksContainer').innerHTML = ''; 
    displayBooks(myLibrary); 
    document.getElementById('bookFormPopup').style.display = 'none';
});


displayBooks(myLibrary);