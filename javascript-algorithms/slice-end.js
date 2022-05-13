// slice-end

/* TASK:
  'sliceEnd' which accepts two parameters: 'array' and 'slicedQty', and returns
  a copy of the original array with the 'slicedQty' quantity of indexes removed
  from the end of original array.

  input: array, output: array

  Pseudo code:
  Make a copy of the 'array' parameter
  Include all the array indexes in the copy except the last number quantity of
  indexes dictated by the 'slicedQty' parameter.
  Negate the 'sliceQty' parameter to remove the quantity of indexes from the end
  in the copied array.
  Return the array copy */

function sliceEnd(array, slicedQty) {
  return array.slice(0, -slicedQty);
}

const array1 = ['red', 'yellow', 'pink', 'green', 'purple', 'orange', 'blue']

const array2 = [3, 5, 7, 9, 11, 13, 15]

const array3 = ['Allen', 'Bonnie', 'Charlie', 'Danika']

console.log('array 1:', array1, 'array sliced (2):', sliceEnd(array1, 2));
console.log('array 2:', array2, 'array sliced (4):', sliceEnd(array2, 4));
console.log('array 3:', array3, 'array sliced (3):', sliceEnd(array3, 3));
