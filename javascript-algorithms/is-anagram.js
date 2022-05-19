//isAnagram

/* TASK: Create a function that accepts two strings and returns true or false
  based on whether the strings are anagrams or not.

  input: two strings, output: boolean

  Pseudo Code: Define a function named 'isAnagram' with two parameters:
  'firstString', 'secondString'
  Unify all the letters in the strings by making them all lower case
  Alphabetically sort the the 'firstString' parameter and store the sorted
  string in the variable 'sortedFirstString'
  Alphabetically sort the the 'secondString' parameter and store the sorted
  string in the variable 'sortedSecondString'
  Check to see if 'sortedFirstString' is the exact same as 'sortedSecondString'
  If the the sorted strings are not the same, return false
  If the sorted strings are the same, return true */

function isAnagram(firstString, secondString) {

  var sortedFirstString = firstString.toLowerCase().split(' ').join('').split('').sort().join('');
  var sortedSecondString = secondString.toLowerCase().split(' ').join('').split('').sort().join('');

  if (sortedFirstString !== sortedSecondString) {
    return false;
  }
  return true;
}

const stringOne = 'posh';
const stringTwo = 'shop';

console.log('1:', stringOne);
console.log('2:', stringTwo);

console.log('is anagram:', isAnagram(stringOne, stringTwo));
