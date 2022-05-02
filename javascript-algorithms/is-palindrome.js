//isPalindrome
/* TASK:
  This function should take in one parameter and returns true or false if it is
  a palindrome. As a bonus, allow your function to ignore whitespace and
  capitalization so that isPalindrome('a man a plan a canal Panama');
  returns true.

  input: string, output: boolean

  Pseudo code:
  create a cleanArr array containing the str to remove spaces, capitals, and
  punctuation.
  If the first half of the string is equal(compared to) to the last half, return
  true. */

  const isPalindrome = (str) => {
    const cleanArr = str.toLowerCase().split(' ').join('').split('');

    for (let i = 0; i < cleanArr.length; i++){
      if (cleanArr[i] !== cleanArr[cleanArr.length-(1+i)]){
        return false;
      }
    }
  return true;
  }

  console.log('isPalindrome #1 - true', isPalindrome('Was it a cat I saw'));
  console.log('isPalindrome #1 - false', isPalindrome('Was it a really big cat I saw'));



  //refactored using 'replaceAll':

  const isPalindrome2 = (str) => {

  const palinCombined =str.replaceAll(' ','').toLowerCase();

    for (let i=0; i<palinCombined.length; i++){
      if (palinCombined[i] !== palinCombined[palinCombined.length -1 - i]) {
        return false}
      }
    return true;
  }

  console.log('isPalindrome #2 - true', isPalindrome2('Was it a cat I saw'));
  console.log('isPalindrome #2 - false', isPalindrome2('Was it a really big cat I saw'));
