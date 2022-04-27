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

  const multipleLetterCount = (str) => {
    let letterCountObj = {};

    for(let i = 0; i < str.length; i++) {
        if(letterCountObj[str[i]] === undefined) {
         letterCountObj[str[i]] = 1;
         } else {letterCountObj[str[i]]++;
      }
    }
    return letterCountObj;
  }

  console.log('multiple letter count 1:', multipleLetterCount('pretty awwweeeesome!'));

  //refactor into for...of loop:

   const multipleLetterCount1 = (str) => {
    let letterCountObj = {};

    for(let curChar of str) {
        if(letterCountObj[curChar] === undefined) {
         letterCountObj[curChar] = 1;
         } else {letterCountObj[curChar]++;
      }
    }
    return letterCountObj;
  }

  console.log('multiple letter count 2:', multipleLetterCount1('pretty awwweeeesome!'));

  // Third possible solution:

  function multipleLetterCount2(str){
    let finalObj = {};
    for(let i =0; i< str.length; i++){
      if (!(str[i] in finalObj)){
        finalObj[str[i]] = 1;
      } else {
        finalObj[str[i]]++;
      }
    }
    return finalObj;
  }
  console.log('multiple letter count 3:', multipleLetterCount2('pretty awwweeeesome!'));
