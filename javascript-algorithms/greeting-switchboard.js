// greeting-switchboard: switch statement practice
/*TASK:
  Write a function that utilizes swtich statements in place of if, else
  statements. Create a greeting switchboard that assigns different greetings to
  numerical numbers.

  input: numerical values, output: corresponding greeting in string format.

  Psuedo code:
    define a function named switchboard which accpets one parameter, 'selection'
    a numerical value.
    assign an empty string to the variable 'greeting'
    write a switch statement that accepts the 'selection' parameter, and write
    several cases based on the numerical values.
    return the greeting associated with the value of 'selection'

*/

function switchboard(selection) {
  let greeting = '';

  if ( selection < 1 || selection > 7 ) {
    return 'error: please enter a value between 1 and 7';
  }

  switch (selection) {
    case 1:
      greeting = 'hello';
      break;
    case 2:
      greeting = 'hola';
      break;
    case 3:
      greeting = 'bonjour';
      break;
    case 4:
      greeting = 'hallo';
      break;
    case 5:
      greeting = 'sveiki';
      break;
    case 6:
      greeting = 'merhaba';
      break;
    case 7:
      greeting = 'ciao';
      break;
  }

  return greeting;
}

console.log( `Hello in English is ${switchboard(1)}!`);
console.log( `Hello in French is ${switchboard(3)}!`);
console.log( `Hello in Serbian is ${switchboard(9)}!`);
console.log( `Hello in Turkish is ${switchboard(6)}!`);
console.log( `Hello in Turkish is ${switchboard(-4)}!`);
