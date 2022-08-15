// questionMarksMath

/* TASK: Create a function named questionMarksMath which accepts one parameter,
  'str'. The parameter will be a string made up of single digit numbers, letters,
  and question marks. This function will check the string and see if there are
  exactly 3 question marks between every pair of number values that add up to 10.
  If any pair of numbers separated by 3 question marks in the string add up to
  10, then the program should return 'true', otherwise, it should
  return 'false'. If there aren't any numbers that add up to 10, or if there
  aren't 3 question marks between the numbers, the program should return 'false'.

  Pseudo-code: input: string, output: boolean

  First, set the result to false as default.
  Loop through the string (using 'i' value for index), and for each index,
  initiate an inner loop to loop through the remaining indexes in the string
  (using j index for inner loop) to compare the values to each other.
  If the two values being compared are numbers that add up to 10, set the result
  as true.
  Now, check for false positives:
    Slice the string at the two index values, and split the string into an array
    passing in a '?' as the separator.
    If the length of the array minus one is less than 3, checking for three '?',
    then set the result to false.
    Next, if the second index or beyond of the first string in the array is a
    number, then that means the sum of 10 may not be coming from a pair next to
    each other, so set the result to false.
    If it the values of i and j pass all the false positive tests, then return
    true before continuing to loop through the rest of the string, as we now no
    longer need to.
*/


  function questionMarksMath(str) {
    let res = false;
    for (let i = 0; i <str.length; i++) {
      for (let j = i+1; j < str.length; j++) {

        if (Number(str[i]) + Number(str[j]) === 10) {
          res = true;
          //Check for false positives:
          const sliceArr = str.slice(i,j).split("?");

          if (sliceArr.length -1 < 3 || sliceArr.length > 4) {
            res = false;
            break;
          }

          for (let k = 1; k < sliceArr[0].length; k++) {
            if (Number(sliceArr[0][k])) {
              res = false;
              break;
            }
          }
        }

        if (res === true) {
          return true;
        }
      }
    }
    return res;
  }

console.log(questionMarksMath("a55s2???5asklj4?ada?s?6d???7d"));
console.log(questionMarksMath("a55s2???5asklj4?ada?s?8d???7d"));
console.log(questionMarksMath("5???5asd"));
console.log(questionMarksMath("a55s2?asd?asd?5as???7d"));
/* Optimize by stopping at i when it is too close to the end to be true */
