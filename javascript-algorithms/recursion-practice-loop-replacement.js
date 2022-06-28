// loop replacement: sum
/*TASK:
  Write a recursive function, sum(arr, n), that returns the sum of the first n
  elements of an array, arr.

  input: array of numbers, and a numberic value, output: a numerical value

  Pseudo code:
  define a recursive function named 'sum' which accepts two parameters - arr and
  n.
  write a conditional statement that compares the input to a base case to ensure
  the function will not execute infinitely, here the fuction will return 0 if n
  is a negative value.
  if n is greater than 0, then return the function sum with two paramters - arr,
  and n-1, plus the array index at n-1.

  */

function sum(arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}

const array = [2,2,4,5,7];
const index = [3];

console.log(`recursion function sum, where array = ${array}, and n = ${index}:
  ${sum(array, index)}`);
