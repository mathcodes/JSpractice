/*
  THIS IS THE FINAL SOLUTION PRESENTED IN THE VIDEO
*/

const username = Symbol("username");
const password = Symbol("password");

const user = {
  // without square brackets, values are accessible.
  [username]: "emmabostian",
  [password]: "1234566",
  age: 27,
};

console.log(user.username);
