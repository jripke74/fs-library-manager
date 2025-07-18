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

function displayBooks(bookArray) {
  const allBooks = bookArray.map(
    (book) => `${book.title} ${book.author} ${book.pages}`
  );
  return allBooks.toString();
}

function getBookSummaries(bookArray) {
  return bookArray.map((book) => book.about);
}

function getBooksByAuthor(booksArray, author) {
  return booksArray.filter((book) => book.author === author);
}

function getTotalPages(booksArray) {
  return booksArray
    .map((book) => book.pages)
    .reduce((total, pages) => total + pages, 0);
}

const libraryBooks = displayBooks(library);
const bookSummaries = getBookSummaries(library);
const booksByArvidKahl = getBooksByAuthor(library, "Arvid Kahl");
const totalPagesOfBooksInLibrary = getTotalPages(library);

console.log(libraryBooks);
console.log(bookSummaries);
console.log(booksByArvidKahl);
console.log(totalPagesOfBooksInLibrary);
