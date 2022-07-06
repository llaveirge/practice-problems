// objectCleaner

/* TASK: Create a function that returns a copy of 'dirtyObj' parameter that
  doesn't include the properties in the 'keys' parameter.

  input: object, array, output: object (clean copy)

  Pseudo code:
  Define a function named 'objectCleaner' which ccepts 2 parameters: 'dirtyObj'
    and 'keys'.
  Create a copy of the 'dirtyObj' parameter called 'cleanedObj'.
  Iteratre through the 'keys' parameter.
  Check if a value in 'keys' parameter is the same as a property in the 'dirtyObj'
   parameter.
  If the 'keys' parameter value matches a 'dirtyObj' key, delete the key
   and value from 'cleanedObj'.
  Return the new 'cleanedObj' object. */

function objectCleaner(dirtyObj, keys) {
  const cleanedObj = { ...dirtyObj };

  for (const prop of keys) {
    if (prop in dirtyObj) {
      delete cleanedObj[prop];
    }
  }
  return cleanedObj;
}

const obj1 = { name: 'Sandra', color: 'green', pet: 'fish', state: 'Florida' };

console.log(obj1);

console.log('obj1 cleaned of state and pet properties:');
console.log(objectCleaner(obj1, ['state', 'pet']));

console.log('obj1 cleaned of color property:');
console.log(objectCleaner(obj1, ['color']));
