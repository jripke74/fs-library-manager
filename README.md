# fs-library-manager

In this workshop, you will learn higher order array methods by building a library manager.

Step 1
In the previous lecture videos, you learned how to work with higher order functions like map, filter and reduce.

In this workshop, you will build a library manager app that will give you an opportunity to practice working with different higher order functions.

To get started, create a variable called library and assign it an empty array.

Step 2
Inside the library array, create an object with the following properties and values:

Property	Value
title	"Your Next Five Moves: Master the Art of Business Strategy"
author	"Patrick Bet-David and Greg Dinkin"
about	"A book on how to plan ahead"
pages	320

Step 3
Create another object inside the library array with the following properties and values:

Property	Value
title	"Atomic Habits"
author	"James Clear"
about	"A practical book about discarding bad habits and building good ones"
pages	320

Step 4
The rest of the objects representing the books have been filled in for you.

Now would be a good time to start working on displaying the book information in the console. Over the next few steps, you will learn how to work with the map() method to achieve this goal.

Begin by logging the message "Books in the Library:\n" to the console. The newline character is added here because there should be a space between this message and the list of books.

Step 5
Next, create a function called getBookInformation with one parameter. This parameter will represent the array of books when the function is called. You can name this parameter whatever you like.

Step 6
In prior lectures, you learned about the map() method which creates a new array by applying a given function to each element of the original array.

Here is an example:

Example Code
const developers = [
  { name: "Alice", city: "New York", title: "Frontend Developer" },
  { name: "Bob", city: "San Francisco", title: "Backend Developer" }
];

console.log(developers.map(dev => dev.name));
// ["Alice", "Bob"]
dev in this example represents each object in the developers array. Then, dot notation is used to get the name from the object. Lastly, the result will be a new array of names.

Inside the getBookInformation function, use the map() method on the catalog parameter to return a new array of just book titles. Refer to the example if you need help.

Step 7
Finally, create a getTotalPages function with a single parameter, accepting an array with book objects. The function should return the total number of pages in the books from the array passed to the function.

Step 8
Now, you should test out the functions by calling them with the appropriate arguments.

Create four new variables: libraryBooks, bookSummaries, booksByArvidKahl, and totalPagesOfBooksInLibrary. Set them all to the calling of displayBooks(), getBookSummaries(), getBooksByAuthor(), and getTotalPages() respectively with the appropriate parameters.

Log all the variables to the console.

With that, your library manager workshop is complete.