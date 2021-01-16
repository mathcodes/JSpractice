# 01_06 Ticking Time

## What You'll Do

Given a `<div id="clock"></div>` create a clock which displays the current hour, minutes, and seconds.

## Requirements

- Use setInterval
- Use Date()

## Instructions

Develop your solution in the `begin.js` file. If this challenge requires you to interact with the DOM, you will have an HTML element provided for you in the `index.html` file. Use this node to complete your DOM manipulation.

If you get stuck or want to see the final solution, you can check out the `end.js` file. To run the solution, comment the `<script src="./start.js"><script>` line and uncomment the `<script src="./end.js></script>` line.

## Transcript

### Ticking time

- `Callback functions` are **functions that get passed to other functions as arguments and get called at a later point in time.** 
- `SetTimeout` is one JavaScript function which requires a callback function. We pass setTimeout a function and after a certain amount of time, our function gets executed. 

## Challenge
In this challenge, you'll create a ticking clock in the document body. The index.html file contains a div with an ID of clock. Using `callback functions` and `DOM manipulation`, output a ticking digital clock which displays the current hours, minutes, and seconds.


## Solution

- If we go to the index.html file, you'll see we have a div with an ID of clock. 

`<div id="clock"></div>`

- Nxt let's create our clock function.

`function clock() { `

- First, let's grab the clock DOM node using document.querySelector.

`const clockNode = document.querySelector("#clock");` 

- To get the clock to update every second, we can use setInterval and pass 1000 milliseconds as the second argument.

`return setInterval(() => {   ...    }, 1000);`

- The first argument will be our callback function. This callback function will create a new date and turn it into a locale time string. 

`let date = new Date();    ...    let tick = date.toLocaleTimeString();`
    
- Then we can set the clock DOM nodes text content to the new value. 

`clockNode.textContent = tick;`

- Now let's call our clock function to see it appear in the UI. 

If we head to our browser, we can see that our clock displays the current hour, minutes, and seconds. Whether you're working with `setTimeout` or using 

`callback functions after requesting data asynchronously`, understanding how they work is extremely important. 


I struggled to understand `callback functions` and `asynchronous programming` when I was beginning my JavaScript programming journey, and to be honest, I still struggle with them to this day. But the more you practice working with asynchronous data and callback functions, the more confident you'll become.

```

function clock() {
  const clockNode = document.querySelector("#clock");
  return setInterval(() => {
    let date = new Date();
    let tick = date.toLocaleTimeString();
    clockNode.textContent = tick;
  }, 1000);
}

clock();


```