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
  - Create an object containing roman numeral values
  - Verify it is a valid roman numeral including only the allowed characters
  - Initialize a counter variable at 0
  - Iterate through the string and:
    - assign the of the current string index value property of the numeralValue
    object to the variable 'cur'
    - add 1 to the current string index value and assign that property of the
    numeralValue object to the variable 'next'
    - if the value of cur is less than the value of next, we know we have to
    subtract cur from next and add the result of that expression to the
    counter variable
      - then increment i by one to skip the next index of s in the for loop
      since it was factored into the subtraction expression
    - the value of cur is not less than next, then add that value to the counter
    variable
  - Return the integer at the end of the iteration.
*/

const romanToInt = s => {

  const numeralValues = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  for (let char of s ) {
    if (char in numeralValues === false) {
      return 'Please enter a valid roman numeral.'
    }
  }

  let counter = 0;
  for (let i = 0; i < s.length; i++){
    let cur = numeralValues[s[i]];
    let next = numeralValues[s[i+1]];

    if (cur < next) {
      counter += next - cur;
      i++;
    } else {
      counter += cur;
    }
  }

  return counter;
};

const s = 'I'
console.log('Roman Numeral = ', s);
console.log('Integer = ', romanToInt(s));
