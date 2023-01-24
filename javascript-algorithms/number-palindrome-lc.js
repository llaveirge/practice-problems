 // numberPalindrome
 /* TASK:
 Given an integer x, return true if x is a palindrome, and false otherwise.

 input: integer, output: boolean

 Pseudo code:

  - Convert the number to an array of characters to iterate through the digits
  - Compare the first digit with the last digit, if they are ===,
  then continue working from the outside, in. If they are not ===, then exit
  with a return value of 'false'.
  - Continue comparing digits from outside in, upto the middle digit if the
  number of digits is odd, otherwise the last pair.
  - If all pairs of digits match, return 'true'.
 */

const numberPalindrome = (x) => {
  let numArray = x.toString().split('');
  console.log(numArray);
  for (let i = 0; i < Math.floor(numArray.length/2); i++) {
    if ( numArray[i] !== numArray[numArray.length - (i + 1)] ) {
      return false;
    }
  }
    return true;
};

let integer1 = 475623;

let integer2 = 9527259;

let integer3 = 4554;

let integer4 = 32;

console.log('Is interger1 a Palindrome? ', numberPalindrome(integer1));
console.log('Is interger2 a Palindrome? ', numberPalindrome(integer2));
console.log('Is interger3 a Palindrome? ', numberPalindrome(integer3));
console.log('Is interger4 a Palindrome? ', numberPalindrome(integer4));
