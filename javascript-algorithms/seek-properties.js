//seek-properties

/* TASK: Define a function named 'seekProperties' which accepts 2 parameters:
  'sourceData' and 'properties', and return an object which contains a copy of the
   source data if it contains 'properties'

   input: object, array, output: object

  Create an empty object to store the desired keys and values in
  Iterate through the 'properties' parameter
  Check if a value in 'properties' parameter is the same as a property in the
  'sourceData' parameter
  If the 'properties' parameter value matches a 'sourceData' parameter key, add
  the key and value to the new object
  Check if any of the new object's keys have an undefined value, and if so
  delete the key
  Return the new 'sourcePropsObj' object */

function seekProperties(sourceData, properties) {
  const sourcePropsObj= {};

  for ( let prop of properties ) {
    if ( prop in sourceData ) {
      sourcePropsObj[prop] = sourceData[prop];
      if ( sourcePropsObj[prop] === undefined ) {
        delete sourcePropsObj[prop];
      }
    }
  }
  return sourcePropsObj;
}

const students = {
  jared: {color: 'blue', snack: 'apples'},
  samantha: {color: 'yellow', snack: 'oranges'},
  dale: {color: 'orange', snack: 'chips'},
  arianna: {color: 'green', snack: 'carrots'}
};

const attendance = ['samantha', 'arianna', 'dale'];


console.log('students:', students);
console.log('attendance:', attendance);
console.log('student data from present students:', seekProperties(students, attendance))
