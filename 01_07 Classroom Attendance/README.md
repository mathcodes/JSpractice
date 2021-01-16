# 01_07 Classroom Attendance

## What You'll Do

Given an object, classroom, return an array of student names

- The classroom object is structured with two values: hasTeachingAssistant (boolean) and classList (array of strings)

```js
  {
    hasTeachingAssistant: false,
    classList: ["Rashida", "John", "Roman", "Lisa", "Omair", "Lukas"],
  }
```

- The teacher will always be the first item in the classList array
- If `hasTeachingAssitant` is true, the teaching assistant will be the second item in the classList array

## Requirements

- Use object and array destructuring

## Instructions

Develop your solution in the `begin.js` file. If this challenge requires you to interact with the DOM, you will have an HTML element provided for you in the `index.html` file. Use this node to complete your DOM manipulation.

If you get stuck or want to see the final solution, you can check out the `end.js` file. To run the solution, comment the `<script src="./start.js"><script>` line and uncomment the `<script src="./end.js></script>` line.


## Transcription

## Classroom attendance

Selecting transcript lines in this section will navigate to timestamp in the video
(dramatic music) - De-structuring is an expression, which allows us to extract values from objects and arrays into variables. To destructure values from arrays, we use square brackets and to destructure values from objects, we use curly brackets. The first variable declared in the brackets will receive the first array item as its value. The second variable will receive the second array item as its value, and so on. You can use the spread operator or three dots to replace the remaining array or object values into one variable. 

## Challenge

- For this challenge, you'll use array and object de-structuring to return a list of students. 
- Create a function called get students, which takes one argument, Classroom 
const getStudents = (Classroom) => { 
  hasTeachingAssistant: boolean/true/false;
  classList: ["teacher" , "student1" , "student2" , ...]
}

if (hasTeachingAssistant === true) {
  classList[1] = 'Teaching Assistant';
  classList[i>1] = 'student';
}else{
  classList[i>0] = 'student';
}
- classroom will contain a boolean value called has TeachingAssistant and class list, which is an array of people in the classroom. 
- The first value in class lists will be the teacher. 
If has teaching assistant is true, The second value in the class list is the teaching assistant and the remaining values in the class list are the students. If has teaching assistant is false, The second value through the end of the class list are the students. Your job is to return a list of students. You must use `object` and `array de-structuring`. 

## Solution

- Let's first define our get students function. We'll destructure the has teaching assistant and class list values from the classroom object. Next ,let's declare three variables; teacher ,teaching, assistant, and students. We want to declare them outside of our if statement so we can return the students array. If there's a teaching assistant, we want to destructure the first value into the teacher variable and the second value into the teaching assistant variable. The rest of the values will be spread into the students array Otherwise we will spread the first value into the teacher variable and the rest of the values into the student's array. Finally, we can return the students array. Now let's call our get students function with a classroom object and console log the result. If we head to the browser, we can see our students being logged to the console. de-structuring syntax is becoming more and more popular, but I definitely remember the first time I encountered de-structuring. I was really confused by it, but the more you practice de-structuring the more it becomes your go-to way to abstract values from objects into arrays.


![Diagram1]("https://raw.githubusercontent.com/mathcodes/JSpractice/main/01_07%20Classroom%20Attendance/Diagram1.png")
