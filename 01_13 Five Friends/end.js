/*
  THIS IS THE FINAL SOLUTION PRESENTED IN THE VIDEO
*/

// Named asynchronous function
async function getUsers() {
  let people = await fetch("https://randomuser.me/api/?results=5");
  let data = await people.json();
  const timeline = document.querySelector("#timeline");
  data.results.forEach((person) => {
    let image = document.createElement("img");
    image.src = person.picture.medium;
    timeline.appendChild(image);
  });
}

// Anonymous asynchronous function
// const getUsers = async () => {
//   let people = await fetch("https://randomuser.me/api/?results=5");
//   let data = await people.json();
//   const timeline = document.querySelector("#timeline");
//   data.results.forEach(person => {
//     let image = document.createElement("img");
//     image.src = person.picture.medium;
//     timeline.appendChild(image);
//   });
// };
