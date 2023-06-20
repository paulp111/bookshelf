## Bookshelf
This is a simple bookshelf web application built using JavaScript, HTML, and CSS. It allows you to add books to the bookshelf and display them on the web page.

#### Features
Add books to the bookshelf by filling out the title, author, pages, and read status.
Display the added books on the bookshelf.
Delete individual books from the bookshelf.
Reset the book entry form after adding a book.
Usage
To use the application, follow these steps:

Open the index.html file in a web browser.

Fill out the book details (title, author, pages) in the book entry form.

Check the "Read?" checkbox if you have read the book; otherwise, leave it unchecked.

Click the "Add Book" button to add the book to the bookshelf.

The added book will appear as a card on the bookshelf.

To delete a book, click the "Delete" button on the respective book card.

You can add multiple books by repeating steps 2 to 6.

#### JS Code Explanation
The JavaScript code (main.js) is responsible several functions:

buchHinzufuegen(): This function is called when the user clicks the "Add Book" button or submits the book entry form. It retrieves the input values, validates them, creates a new book object, adds it to the buecher array, and calls the buecherAnzeigen() and formularZuruecksetzen() functions.

buecherAnzeigen(): This function updates the bookshelf by clearing the existing book cards and creating new ones based on the buecher array. Each book card displays the book's title, author, pages, and read status. It also includes a "Delete" button that calls the loeschen() function when clicked.

buchLoeschen(index): This function removes the book at the specified index from the buecher array and updates the bookshelf by calling buecherAnzeigen().

loeschen(index): This function returns a closure that wraps the buchLoeschen() function with the specified index. It is used as an event listener for the "Delete" button.

formularZuruecksetzen(): This function resets the book entry form by clearing the input fields and unchecking the "Read?" checkbox.


The HTML file (index.html) contains the structure of the web page like the bookshelf container, book cards, book entry form, and buttons. It's also linked to the CSS file.


Styling
The CSS file  defines the styles for various elements of the web page. The styles aim to provide a clean and responsive design.
