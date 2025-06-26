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
The rest of the objects representing the books have been filled in for you. You can take a look at them.

Now, you should start working on getting several common parts of the books.

Start by displaying all the books. Create a displayBooks function with a parameter accepting an array with book objects. The function should return a string that contains the title, author, and pages of all the books in the array passed to function.