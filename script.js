let myLibrary = [    { title: "Book 1", author: "Author 1", pages: 300, read: true },
{ title: "Book 2", author: "Author 2", pagesC: 250, read: false }];

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


displayBooks(myLibrary);