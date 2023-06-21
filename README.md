## Bookshelf
This is a bookshelf application made with JavaScript, HTML, and CSS. It allows you to add multiple books to the bookshelf and display them on the web page.


#### Features

Add books to the bookshelf by filling out the title, author, pages, and read status.
Display the added books on the bookshelf.
Delete books from the bookshelf or change the read status.
Reset the book entry form after adding a book.


#### How to use

Fill out the form (title, author, pages).
Check the "Read?" checkbox if you have read the book, if not leave it unchecked
Click the "Add Book" button to add the book to the bookshelf.
The added book will appear as a card on the bookshelf.
To delete a book, click the "Delete" button on the respective book card.


### Code Explanation
The JavaScript code (main.js) handles the following functions:

buchHinzufuegen(): Adds a book to the bookshelf when the user clicks the "Add Book" button or submits the book entry form. It retrieves the input values, checks them, creates a new book object, adds it to the book array, and updates the bookshelf.
buecherAnzeigen(): Updates the bookshelf by clearing existing book cards and creating new ones based on the book array. Each book card displays the book's details and includes "Delete" and "Read/not Read" button.
buchLoeschen(index): Removes a book at the specified index from the book array and updates the bookshelf.
loeschen(index): Wraps the buchLoeschen() function with the specified index and returns a closure. It is used as an event listener for the "Delete" button.
formularZuruecksetzen(): Resets the book entry form by clearing the input fields.


#### HTML
The HTML file (index.html) defines the structure of the web page, including the bookshelf container, book cards, book entry form, and buttons. 

#### Styling
The CSS file (styles.css) provides styles for the elements of the web page It aims for a user friendly look of the bookshelf, book cards, form, buttons and so on.
