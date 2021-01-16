# 01_05 Private Object

## What You'll Do

Create a user object which has three properties:

- username
- password
- age

Username and password must not be accessible when accessed with
alert() or console.log(). Age can be publicly accessed.

## Requirements

- Use JavaScript symbols

## Instructions

Develop your solution in the `begin.js` file. If this challenge requires you to interact with the DOM, you will have an HTML element provided for you in the `index.html` file. Use this node to complete your DOM manipulation.

If you get stuck or want to see the final solution, you can check out the `end.js` file. To run the solution, comment the `<script src="./start.js"><script>` line and uncomment the `<script src="./end.js></script>` line.

## Transcipt
JavaScript Symbols where a new primitive data type introduced with ES6. Every value returned from a symbol is unique, meaning that we can use them as identifiers for object properties.

## Challenge
In this challenge, you will create a user object that has three properties, username, password, and age. Using JavaScript Symbols, ensure that username and password are private fields on the user character. This means they shouldn't be accessible by calling user.username or user.password. 

## Solution
First, let's create two symbols, one for username and one for password. 


(computer keys clicking) Now, let's create our user object. I'll enter some fake information for us to test out. (computer keys clicking) If we console log user.username and user.password, we should see the values, Emma Bostian and one, two, three, four, five, six, six being logged to the console. In order to prevent this, we can use our previously defined symbols as the object keys. Now, if we console log user.username and user.password, we should receive undefined. (video game music) Symbols are extremely useful for creating private variables. And although you probably won't see them during your day-to-day programming, understanding what they are and what they're used for will really help your development skills. I don't personally use symbols every day, but they definitely come in handy for technical interviews.


```
const username = Symbol("username");
const password = Symbol("password");

const user = {
  // without square brackets, values are accessible.
  [username]: "emmabostian",
  [password]: "1234566",
  age: 27,
};

console.log(user.username);
```