//Roman to Integer
/* Task:
  Given a roman numeral, convert it to an integer.
  There are six instances where subtraction is used:
    I can be placed before V (5) and X (10) to make 4 and 9.
    X can be placed before L (50) and C (100) to make 40 and 90.
    C can be placed before D (500) and M (1000) to make 400 and 900.
  The argument only contains the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').

  Input: s = "III"
  Output: 3
  Explanation: III = 3.
  Example 2:

  Input: s = "LVIII"
  Output: 58
  Explanation: L = 50, V= 5, III = 3.
  Example 3:

  Input: s = "MCMXCIV"
  Output: 1994
  Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

  Input: string character, output: integer

  Pseudo Code:
  - Verify it is a valid roman numeral including only the allowed characters
  - Initialize a counter variable at 0
  - Iterate through the string and add the appropriate values to the counter
  variable and:
    - if the character is an I, X, or C - check if the following character is
    one that can initiate subtraction and do so by altering the value to add
  - Return the integer at the end of the iteration.
*/

const romanToInt = s => {
  let counter = 0;

  for (char of s) {

    if (char !== 'X' && char !== 'I' && char !== 'C' && char !== 'V' && char !== 'M' && char !== 'L' && char !== 'D') {
      return 'Please enter a valid roman numeral.';
    };
  };

  for (let i = 0; i < s.length; i++) {

    if (s[i] === 'I') {
      counter++;
    };

    if (s[i] === 'V') {
      s[i - 1] === 'I' ? counter += 3 : counter += 5;
    }

    if (s[i] === 'X') {
      s[i - 1] === 'I' ? counter += 8 : counter += 10;
    };

    if (s[i] === 'L') {
      s[i - 1] === 'X' ? counter += 30 : counter += 50;
    };

    if (s[i] === 'C') {
      s[i - 1] === 'X' ? counter += 80 : counter += 100;
    };

    if (s[i] === 'D') {
      s[i - 1] === 'C' ? counter += 300 : counter += 500;
    };

    if (s[i] === 'M') {
      s[i - 1] === 'C' ? counter += 800 : counter += 1000;
    };
  };

  return counter;
};

const s = 'X'
console.log('Roman Numeral = ', s);
console.log('Integer = ', romanToInt(s));
