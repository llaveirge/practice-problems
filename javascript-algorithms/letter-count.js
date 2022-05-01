// singleLetterCount
/* TASK:
  This function takes in two parameters (two strings). The first parameter
  should be a word and the second should be a letter.
  The function returns the number of times that letter appears in the word.
  The function should be case insensitive.
  If the letter is not found in the word, the function should return 0.

  input: string and letter, output: number of time letter appears in string.

  Pseudo code:
  declare a variable for count as 0
  iterate through the string and add to the count var each time char is
  encountered.
  make sure that count disregards case.
  return count. */

  const letterCount = (str, letter) => {
    let count = 0;

    for(let curChar of str) {
      if(curChar.toLowerCase() === letter.toLowerCase()){
        count++;
      }
    }
  return count;
  }

  console.log(`String: Your theory is crazy, but it's not crazy enough to be true.
   Letter: a
   letterCount = ${letterCount("Your theory is crazy, but it's not crazy enough to be true.", 'a')}`);

  console.log(`String: LOVE truth, and pardon ERROR without judgement.
   Letter: E
   letterCount = ${letterCount('LOVE truth, and pardon ERROR without judgement.', 'E')}`);

  console.log(`String: Fantastic.
   Letter: v
   letterCount = ${letterCount('Fantastic.', 'v')}`);
