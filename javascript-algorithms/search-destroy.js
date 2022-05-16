// search-and-destroy

/* TASK: Create a function that searches an object for properties that match
array indexes and returns a new object without properties listed in the array.

  input: object and array, output: object

  Define a function named searchAndDestroy which accepts 2 parameters: 'dataObj'
  and 'comparisonArr'
  Create a copy of the 'dataObj' parameter called 'cleansedObj'
  Iterate through the 'comparisonArr' parameter
  Check if a value in 'comparisonArr' parameter is the same as a property in
  the 'dataObj' parameter
  If the 'comparisonArr' parameter value matches a 'dataObj' parameter key,
  delete the key and value from 'cleansedObj'
  Return the new 'cleansedObj' object*/

function searchAndDestroy(dataObj, comparisonArr) {
  var cleansedObj = { ...dataObj };

  for (var prop of comparisonArr) {
    if (prop in dataObj) {
      delete cleansedObj[prop];
    }
  }
  return cleansedObj;
}

const scores = { Dave: 2, Sam: 22, Gina: 11 };
const eliminated = ['Dave'];

console.log('Remaining players:', searchAndDestroy(scores, eliminated));
