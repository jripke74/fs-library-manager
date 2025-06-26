// Step 1
// In the previous lecture videos, you learned how to work with higher
// order functions like map, filter and reduce.

// In this workshop, you will build a library manager app that will
// give you an opportunity to practice working with different higher
// order functions.

// To get started, create a variable called library and assign it
// an empty array.

// Step 2
// Inside the library array, create an object with the following
// properties and values:

// Property	Value
// title	"Your Next Five Moves: Master the Art of Business Strategy"
// author	"Patrick Bet-David and Greg Dinkin"
// about	"A book on how to plan ahead"
// pages	320

// Step 3
// Create another object inside the library array with the following properties and values:

// Property	Value
// title	"Atomic Habits"
// author	"James Clear"
// about	"A practical book about discarding bad habits and building good ones"
// pages	320

const library = [
  {
    title: "Your Next Five Moves: Master the Art of Business Strategy",
    author: "Patrick Bet-David and Greg Dinkin",
    about: "A book on how to plan ahead",
    pages: 320,
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    about:
      "A practical book about discarding bad habits and building good ones",
    pages: 320,
  },
  {
    title:
      "Choose Your Enemies Wisely: Business Planning for the Audacious Few",
    author: "Patrick Bet-David",
    about:
      "A book that emphasizes the importance of identifying and understanding one's adversaries to succeed in the business world",
    pages: 304,
  },
  {
    title: "The Embedded Entrepreneur",
    author: "Arvid Kahl",
    about: "A book focusing on how to build an audience-driven business",
    pages: 308,
  },
  {
    title:
      "How to Be a Coffee Bean: 111 Life-Changing Ways to Create Positive Change",
    author: "Jon Gordon",
    about: "A book about effective ways to lead a coffee bean lifestyle",
    pages: 256,
  },
  {
    title:
      "The Creative Mindset: Mastering the Six Skills That Empower Innovation",
    author: "Jeff DeGraff and Staney DeGraff",
    about: "A book on how to develop creativity and  innovation skills",
    pages: 168,
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki and Sharon Lechter",
    about:
      "A book about financial literacy, financial independence, and building wealth. ",
    pages: 336,
  },
  {
    title: "Zero to Sold",
    author: "Arvid Kahl",
    about: "A book on how to bootstrap a business",
    pages: 500,
  },
];

// Step 4
// The rest of the objects representing the books have been filled in for you.
// You can take a look at them.

// Now, you should start working on getting several common parts of the books.

// Start by displaying all the books. Create a displayBooks function with a
// parameter accepting an array with book objects. The function should return
// a string that contains the title, author, and pages of all the books in the
// array passed to function.

function displayBooks(bookArray) {
  const allBooks = bookArray.map(
    (book) => `${book.title} ${book.author} ${book.pages}`
  );
  return allBooks.toString();
}

// Step 5
// To display the book summaries, you can use the about property of each book.

// Create a getBookSummaries function with a single parameter, accepting an array
// with book objects. The getBookSummaries function should return an array
// containing all the about property value of each book.
function getBookSummaries(bookArray) {
  return bookArray.map((book) => book.about);
}

// Step 6
// Another useful thing to do is to get the books by their author.

// Create a getBooksByAuthor function with two parameters - an array with book objects
// and a string with the author.

// The function must return an array that contains the books by a particular author.

function getBooksByAuthor(booksArray, author) {
  return booksArray.filter((book) => book.author === author);
}

// Step 7
// Finally, create a getTotalPages function with a single parameter, accepting an array
// with book objects. The function should return the total number of pages in the books
// from the array passed to the function.

function getTotalPages(booksArray) {
  return booksArray
    .map((book) => book.pages)
    .reduce((total, pages) => total + pages, 0);
}

// Step 8
// Now, you should test out the functions by calling them with the appropriate arguments.

// Create four new variables: libraryBooks, bookSummaries, booksByArvidKahl, and
// totalPagesOfBooksInLibrary. Set them all to the calling of displayBooks(),
// getBookSummaries(), getBooksByAuthor(), and getTotalPages() respectively with the
// appropriate parameters.

// Log all the variables to the console.

// With that, your library manager workshop is complete.

const libraryBooks = displayBooks(library);
const bookSummaries = getBookSummaries(library);
const booksByArvidKahl = getBooksByAuthor(library, "Arvid Kahl");
const totalPagesOfBooksInLibrary = getTotalPages(library);

console.log(libraryBooks);
console.log(bookSummaries);
console.log(booksByArvidKahl);
console.log(totalPagesOfBooksInLibrary);
