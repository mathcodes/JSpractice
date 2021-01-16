# 01_04 Technical Books

## What You'll Do

Expanding on your previous book application you now want to create a class for technical books. Using the Book class constructed in the last example, extend the functionality to the new TechnicalBook class.

The new TechnicalBook class will take a book edition as a fifth argument.

You should add a getEdition method which prints `The current version of this book is ${version}`.

## Requirements

- Use JavaScript's class notation

## Instructions

Develop your solution in the `begin.js` file. If this challenge requires you to interact with the DOM, you will have an HTML element provided for you in the `index.html` file. Use this node to complete your DOM manipulation.

If you get stuck or want to see the final solution, you can check out the `end.js` file. To run the solution, comment the `<script src="./start.js"><script>` line and uncomment the `<script src="./end.js></script>` line.

## Transcript

## Technical books
In a previous challenge we created a Book class that accepts a `title`, `author`, `ISBN`, and `number of copies`, and provides methods for selling and restocking. Here we will `use inheritance to create a variation on our Book class`
- Your `GOAL` is to `create a TechnicalBook class that inherits from the Book class in the previous challenge`. 
- This class will also take a `title`, `author`, `ISBN`, and `number of copies`, but will take a **fifth argument**, an `edition`. 
- The TechnicalBook class will also `provide a getEdition function` which returns the following string. 
- The current version of this book is, followed by the book's edition. You should `use a template literal for this phrase`. 

## Solution
- Let's start by creating our TechnicalBook class. 
  - We want it to inherit from our Book class so we can use the `extends` keyword.
-  Just like our Book class, we'll need a constructor that accepts our five properties, `title`, `author`, `ISBN`, `num copies`, and `edition`.
-  The Book class needs the `title`, `author`, `ISBN`, and `num copies` arguments, so we can pass them to the Book class using the keyword `super`. 
-  **We must call super before setting any these values on the TechnicalBook class, as it calls the parent constructor with our arguments. **
-  Then we can set `this.edition` to edition. 
-  Lastly, let's add our `getEdition` function. 
-  We'll use a `template literal`, also known as a `template string`, to create this `return value`. 
-  <span style="color:green"><span style="text-shadow:3px 3px 5px black">*Anything inside of the dollar sign curly brackets will be evaluated and turned into a string*</span></span>  (so it's much easier than using string concatenation) 
-  Let's create a new TechnicalBook and console.log its availability and edition. 

If we head back to our browser console, we'll see that a TechnicalBook is being console logged with the correct data. 


<span style="color:green"><span style="text-shadow:3px 3px 5px black">*Inheritance is one of the foundational concepts of programming, so understanding JavaScript's prototypal inheritance is imperative to your understanding of the programming language.*</span></span>