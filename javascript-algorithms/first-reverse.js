// first-reverse

/*TASK:
  Define a function named FirstReverse which accepts one parameter, a string, and
  return the string in reversed order. For example: if the input string is
  "Hello World and Coders" then your program should return the string sredoC dna
  dlroW olleH.

  input: string, output: string.

  Pseudo code:
    Declare a variable to store the new string
    Loop through the original string backwards using a classic for loop and concat
    'i' to the new string.
    Return the new string. */

  function firstReverse(str) {
    let reverseStr = "";
    for (let i = str.length-1; i >= 0; i--) {
      reverseStr += ( str[i] );
    }
     return reverseStr;
  }

  console.log('String = "Hello There". Reversed string =', firstReverse('Hello There.'));
  console.log('String = "Once upon a time...". Reversed string =', firstReverse('Once upon a time...'));
