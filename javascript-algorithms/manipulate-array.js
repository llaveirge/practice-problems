// manipulateArray

/* TASK: This function should take in upt to 4 parameters (an array,
  command, location, and value). 'REMOVE', 3 arguments - If the command is
  'remove' and the location is 'end', the function should remove the last value
  in the array and return the value removed. If the command is 'remove' and the
  location is 'beginning', the function should remove the first value in the
  array and return the value removed. 'ADD', 4 arguments - If the command is
  'add' and the location is 'beginning', the function should add the value
  (fourth argument) to the beginning of the array and return the array. If the
  command is 'add' and the location is 'end', the function should add the value
  to the end of the array.
    Rules to follow: If there is a command, must include location. If 'add',
     then must include the value to be added - return an error message if no
     value is included.

  Pseudo code:
    Input: up to 4 parameters, 1) array, 2) command: add or remove, 3) location:
     end, beginning, 4) value: if adding to array
    Output: the value removed or the array if a value is added
    Define a function named manipulateArray which accepts upto 4 parameters.
    Verify there are at least 3 arguments.
    Standardize command and location by making them lowercase and assigning
    them to a variable.
    Within the function code block, verify that all arguments are valid.
    If command doesn't equal add or remove, return 'Please enter add or remove'.
    If location doesn't equal beginning or end, return 'Please enter beginning
    or end'.
    If command is add, but value is undefined, 'please enter value'. */

  function manipulateArray(arr, command, location, value) {
   if (arguments.length < 3) return `Please enter all necessary arguments`;

    const cleanLocation = location.toLowerCase();
    const cleanCommand = command.toLowerCase();

    // Verify arguments are valid:
    if (cleanCommand !== 'add' && cleanCommand !== 'remove') {
      return(`Please enter 'add' or 'remove'`);
    }

    if (cleanLocation !== 'beginning' && cleanLocation !== 'end') {
      return `Please enter 'beginning' or 'end'`;
    }

    if (cleanCommand === 'add' && value === undefined) {
      return `Please enter a value`;
    }

    // Remove and Add command functionality:
    if (cleanCommand === 'remove') {
      if (cleanLocation === 'beginning') return arr.shift();
      return arr.pop();
    } else if (cleanLocation === 'beginning') {
      arr.unshift(value);
      return arr;
    }

    arr.push(value);
    return arr;
  }

  console.log('test 1', manipulateArray([1,2,3],'remove','beginning','Hello'));
  console.log('test 2', manipulateArray(['alice', 'gerald', 'doug', 'linda'],'remove','end'));
  console.log('test 3', manipulateArray(['alice', 'gerald', 'doug', 'linda'],'add','end', 'harry'));
  console.log('test 4', manipulateArray(['alice', 'gerald', 'doug', 'linda'],'add','beginning', 'donna'));
  console.log('test 5', manipulateArray(['alice', 'gerald', 'doug', 'linda'], 'end', 'marla'));
  console.log('test 6', manipulateArray(['alice', 'gerald', 'doug', 'linda'], 'remove'));
  console.log('test 7', manipulateArray(['alice', 'gerald', 'doug', 'linda'], 'add', 'james'));
