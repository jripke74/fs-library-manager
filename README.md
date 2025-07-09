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
Now it is time to see what the result will look like in the console.

Below your getBookInformation function, add a console.log() and pass in a getBookInformation() function call with library for the argument.

When done correctly, you should see an array of book titles in the console.

Step 8
The array of book titles is nice, but it would be nice to display the title and author for each book like this:

Example Code
[ 
  "Your Next Five Moves: Master the Art of Business Strategy by Patrick Bet-David and Greg Dinkin",
  "Atomic Habits by James Clear",
  "Choose Your Enemies Wisely: Business Planning for the Audacious Few by Patrick Bet-David",
  ...
]
Update your use of the map() method to instead return an array of strings in this format: TITLE by AUTHOR.

You will need to use either template literals or string concatenation with the + operator to achieve this result.

Step 9
While the array of results is working, the final desired result should be a string listing all of the books with a title and author.

This is where the join() method comes in. In earlier lectures, you learned that the join() method is used to return a new string of all of the array elements concatenated into a single string, with a specified separator between each element.

Here is a refresher:

Example Code
const developers = ["Naomi", "Tom", "Jessica"];

const teamList = developers.join("\n");
console.log(teamList); 
// Naomi
// Tom
// Jessica
The separator in this case is the \n which represents the newline character.

Chain the join() method with a \n for the separator to the map(). Now you should see a string in the console instead of the array of results.

Step 10
For the next part of the workshop, you will focus on displaying a list of book summaries to the console.

Begin by logging the message "\nList of book summaries:\n" to the console. The newline character is added here because there should be a space before and after the message here.