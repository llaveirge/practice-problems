//raiseArray
/*TASK:
  This function should should raise inner arrays one level in nested arrays.

  input: array containing arrays, output: array

  Pseudo code:
  Create an empty array to store the raised array inside of and assign it to a
  variable.
  Iterate through the array passed in from the argument and check to see if
  there are any arrays argument
  If not, add it to the 'raisedArr' array.
  If the item is an array, iterate through that array, and add each item
  to the 'raisedArr' array.*/

function raise(array) {
  var raisedArr = [];

  for (var curIndex of array) {
    if (Array.isArray(curIndex) === false) {
      raisedArr.push(curIndex);
    } else if (Array.isArray(curIndex)) {
      for (var innerIndex of curIndex) {
        raisedArr.push(innerIndex);
      }
    }
  }

  return raisedArr;
}

console.log('raised array #1', raise([['Adam', 'Alex', 'Adrian'], 'Emma', 'Jake', [1,3,5]]));
