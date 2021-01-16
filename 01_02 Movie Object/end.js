/*
  THIS IS THE FINAL SOLUTION PRESENTED IN THE VIDEO
*/

// Function Syntax
/* This is known as a constructor function, and we can think of it like a blueprint for JavaScript objects. 
Every time I create a new movie, I tell the constructor function, 
these are the values I want to assign to this instance of the movie object. 
 */
// Let's start by declaring the function keyword followed by Movie with a capital M. 
// We capitalize the first letter to indicate that this function must be called using the new keyword as its a constructor function. 
function Movie(title, director, genre, releaseYear, rating) {
  // Next let's add our five arguments. Title, director, genre, release year and rating. 
  // Lastly, we'll use the this keyword to assign these arguments to the object instance. 
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }
  // To add a function to the prototype, we use the 
  // --constructor function name followed by the 
  // ----prototype keyword. And lastly, the 
  // ------name of the function we want to add. 
  // We declare the function on the prototype so that each new copy or instance of the movie object doesn't recreate the function. 
  
  Movie.prototype.getOverview = function() {
    //Finally, I'll use template strings to interpolate the properties into an overview string. 
    // Template strings or template literals allow you to combine expressions like a variable value or a process like multiplication with plain strings. 
    // The expressions inside the dollar sign and curly // !: brackets are evaluated 
    // and combined with the plain strings
    return `${this.title}, a ${this.genre} film directed by ${
      this.director
    } was released in ${this.releaseYear}. It received a rating of ${
      this.rating
    }`;
  };

// Class Syntax
class Movie {
  //To set our properties, we use a constructor function inside of our movie class
  constructor(title, director, genre, releaseYear, rating) {
    // This constructor function takes the five arguments and 
    // similar to the constructor function syntax in the first solution, 
    // we assign the values to the object instance, using the this keyword 
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }

  //To add our get overview function to our movie class, we don't need to use the prototype keyword. 
  // We can simply include a get overview function inside of the movie class. 
  // The template literal string is copied from the Function Syntax
  getOverview() {
    return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}`;
  }
}



// OVERALL NOTES CLASS vs FUNCTIONAL: 
// Class notation encapsulates all of the functionality in one place. 
// So it's a little bit simpler and easier to read. 
// And class notation is becoming more prevalent. 
// So it's really important to have a strong understanding of how it works so that you can ace your technical interviews and improve your JavaScript skills.

const Spiderman = new Movie("Spiderman", "Sam Raimi", "Action", 2002, 87);

const Batman = new Movie(
  "The Dark Knight",
  "Christopher Nolan",
  "Action",
  2008,
  83
);

const TheNotebook = new Movie(
  "The Notebook",
  "Nick Cassavetes",
  "Romance",
  2004,
  54
);

console.log(Spiderman);
console.log(Spiderman.getOverview());
console.log(Batman.getOverview());
console.log(TheNotebook.getOverview());
