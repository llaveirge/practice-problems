// longestWord

/* TASK: Create a function named longestWord which accepts one parameter, 'sen'.
 This function should analyze the argument passed into the sen parameter and
 return the longest word in the string. If there are two or more words that are
 the same length, return the first word from the string with that length.
 Ignore punctuation and assume 'sen' will not be empty. Words may also contain
 numbers which will add to the word length, for example 'Hello world123 567'.

  Pseudo code: input: string, output: string
  Identify the longest word in a string.

  First, transform the string into an array, 'senArr' and break the words into
  indexes in the array. When splitting the argument up, check for punctuation.
  Next, loop through the array from index 0 through the last index and determine
  the length of each index.
  Return the first index value with the longest length. */

  function longestWord(sen) {
    const senArr = sen.replace(/[^\w\s]/g,"").split(" ");

    let longestWord = senArr[0];
    for (let i = 1; i < senArr.length; i++) {
      if (senArr[i].length > longestWord.length) {
        longestWord = senArr[i];
      }

    }
    return longestWord;
  }

  console.log(longestWord('Hi, I am32 sam pine!!'));
  console.log(longestWord('!The longest word is the second, here!'));
  console.log(longestWord('Done.'));
