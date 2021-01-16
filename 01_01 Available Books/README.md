# 01_01 Available Books

## What You'll Do

You're developing an inventory application for a bookstore.
You need to create a JavaScript class, "Book", that accepts a title, author,
ISBN (International Standard Book Number), and the number of available copies.

You should provide a getter function called 'availability' that checks the number of available copies
and returns "Out of stock" if it's zero, "Low stock" if it's less than 10, and "In stock" if it's 10 or greater.

You should add a sell method which accepts the number of copies to sell and subtracts it from the number of copies. The number of copies to sell should have a default value of one.

You should add a restock method which accepts the number of copies to restock and adds it to the number of total copies. The number of copies to restock should have a default value of five.

## Requirements

- Use JavaScript's class notation
- Use JavaScript getters

## Instructions

Develop your solution in the `begin.js` file. If this challenge requires you to interact with the DOM, you will have an HTML element provided for you in the `index.html` file. Use this node to complete your DOM manipulation.

If you get stuck or want to see the final solution, you can check out the `end.js` file. To run the solution, comment the `<script src="./start.js"><script>` line and uncomment the `<script src="./end.js></script>` line.
