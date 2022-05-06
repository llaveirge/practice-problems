//factorial

/* TASK:
  This function should take one parameter, the num parameter, and return the
  factorial of numerical argument. For example: if num = 4, then your program
  should return (4 * 3 * 2 * 1) = 24.

  input: number, output: number.

  Pseudo code:
  create a base number variable of 1. Using a loop, count down from the number
  passed in from the argument to 1. Start the loop with an initialization
  expression of i = 1, the conditional statement should be less than or equal to
  the number passed in as the argument, and it should increment by 1. In each
  loop, the factorial variable should equal its value multiplied by i. Return
  the factorial result after the loop. */

    function firstFactorial(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
      factorial *= i;
    }

    return factorial;
  }

  const num1 = 4;
  console.log(`factorial of ${num1}`, firstFactorial(num1));

  const num2 = 8;
  console.log(`factorial of ${num2}`, firstFactorial(num2));

  const num3 = 0;
  console.log(`factorial of ${num3}`, firstFactorial(num3));
