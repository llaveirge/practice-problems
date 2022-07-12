// fcc global scope practice
/* TASK:
  Using let or const, declare a global variable named myGlobal outside of any
  function. Initialize it with a value of 10.
  Inside function fun1, assign 5 to oopsGlobal without using the var, let or
  const keywords.

  input: none, output: string with applicable variables

  Follow instructions:

  */

// Declare the myGlobal variable below this line
const myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

console.log(fun2());

console.log(fun1());

console.log(fun2());
