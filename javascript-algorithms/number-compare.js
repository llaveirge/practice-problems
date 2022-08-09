//numberCompare

/* TASK this function takes in two parameters (both numbers). If the first is
  greater than the second, this function returns "First is greater".
  If the second number is greater than the first, the function returns "Second
  is greater". Otherwise the function returns "Numbers are equal"

  input: two numbers, output: strings

  Pseudo code:
  Define a function named numberCompare that accepts two number value
  parameters.
  Compare the first parameter to the second to see if it is greater, if so,
  return the string 'First is greater'.
  If not, move on to a comparison to see if the second parameter value is
  greater than the first parameter value, if so, return the string 'Second is greater'.
  If neither of those comparisons return true, then return the string 'Numbers
  are equal'.
  Optimize by verifying that the parameters are numbers before comparing. */

  function numberCompare(a, b) {

    if( isNaN(a) || isNaN(b) ) {
      return 'Please enter number values only';
    }

    if ( a > b ) return 'First is greater';
    if (b > a ) return 'Second is greater';
    return 'Numbers are equal';
  }


  console.log('2 and 7:', numberCompare(2, 7));
  console.log('34 and -2:', numberCompare(34, -2));
  console.log('c and 12:', numberCompare('c', 12));
  console.log('104 and dog:', numberCompare(104, 'dog'));
  console.log('sam and Dave:', numberCompare('sam', 'Dave'));
