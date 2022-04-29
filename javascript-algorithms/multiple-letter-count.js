// multipleLetterCount
/* TASK:
  This function takes in one parameter (a string) and returns an object with
  the keys being the letters and the values being the count of the letter.

  input: string, output: object, keys = characters, values = counts.

  Pseudo code:
  declare an empty object.
  iterate through the string and
  add each character to the object as a key and 1 as value.
  if key exists then add 1 for every letter encounter.
  return object. */

  const multipleLetterCount1 = (str) => {
    const letterCountObj = {};

    for (let i = 0; i < str.length; i++) {
      if (letterCountObj[str[i]] === undefined) {
        letterCountObj[str[i]] = 1;
      } else { letterCountObj[str[i]]++; }
    }

    return letterCountObj;
  }

  console.log('multiple letter count #1:', multipleLetterCount1('pretty awwweeeesome!'));

  // Refactor into for...of loop:
  const multipleLetterCount2 = (str) => {
    const letterCountObj = {};

    for (let curChar of str) {
      if (!letterCountObj[curChar]) {
        letterCountObj[curChar] = 1;
      } else { letterCountObj[curChar]++; }
    }

    return letterCountObj;
  }

  console.log('multiple letter count #2:', multipleLetterCount2('pretty awwweeeesome!'));

  // Third possible solution:
  function multipleLetterCount3(str){
    const letterCountObj = {};

    for (let i = 0; i < str.length; i++) {
      if (!(str[i] in letterCountObj)) {
        letterCountObj[str[i]] = 1;
      } else { letterCountObj[str[i]]++; }
    }

    return letterCountObj;
  }

  console.log('multiple letter count #3:', multipleLetterCount3('pretty awwweeeesome!'));
