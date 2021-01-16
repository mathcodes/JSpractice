# Vegetarian dinner
----
## Topics covered:
- `array.filter`: A method to create a new array of vegetarian dinner options
- `document.create`: An element to create our list items
- <span style="color:green"><span style="text-shadow:3px 3px 5px black">*Inheritance is one of the foundational concepts of programming, so understanding JavaScript's prototypal inheritance is imperative to your understanding of the programming language.*</span></span>
---

Selecting transcript lines in this section will navigate to timestamp in the video
Arrays come with many built-in loops and functions that allow us to manipulate data. One of those functions is the `array.filter` method. The filter method, it's a callback function that gets run once for every item in the array and overturns a new array of items that pass a certain criteria. For example, if you have an array of animals and you want to create a new array of only mammals you can use the `array.filter` method on the animal's array to only include animals in the mammal class. 

## Challenge
In this challenge you're planning the menu for an Italian dinner. Some of your guests are vegetarian and you need to... 
- Create a list of vegetarian menu items for them. Given an array of Italian dishes, 
- Create an unordered list of all vegetarian dinner options
- Each menu item is an object containing the dish name and a Boolean variable that indicates whether the dish is vegetarian. 
- Dynamically generate the list items in the DOM from the array of vegetarian items. 

NOTE: Pause the video here, develop your solution. And when you're ready, come back and I'll walk you through how I solved the challenge. 

## Solution
First let's use `document.query` selector to get a handle on our unordered list element which will contain our vegetarian items. If we head to `index.HTML`, you'll see that you already have this unordered list item provided for you.

- Now let's use the `array.filter` method to create a new array of vegetarian dinner options. 
- Now that we have our array, we can dynamically generate list items for each. 
- We'll use the array.forEach loop (vegetarianOptions.forEach) to create a list item for each vegetarian menu item. 
- Next we'll use `document.createElement` to create our list item, `li`. 
- Then we can set the textContent of that list item, `li`,  to the name of our current element. 
- Finally, we can append our new list item to our unordered list. 
- Let's create a menu and pass it to our vegetarian menu function. 

If we head to our browser, we'll see that we now have a list containing our vegetarian dishes. The `array.filter` method is just `one method we can use on arrays to manipulate data`. And `arrays are one of the most common data types in JavaScript`. So it's important to have a strong understanding of these different functions and methods that allow us to manipulate data.


