// printDay

/* TASK this function takes in one parameter (a number from 1-7) and returns the
  day of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is
  less than 1 or greater than 7, the function should return undefined;

  input = number, 1-7. Output = day, Sun-Sat.
  numbers greater than 7 should return undefined.
  Pseudo code:
  Create a library of days associated with numbers - keys and values, create an obj.
  The Number passed in the function as an argument should be associated with key,
  and fn should return key's value, the days of the week as strings. */

  const printDay = (num) => {
    const daysOfWeek = {
      1: 'Sunday',
      2: 'Monday',
      3: 'Tuesday',
      4: 'Wednesday',
      5: 'Thursday',
      6: 'Friday',
      7: 'Saturday'
    };

    return daysOfWeek[num];
  }

  console.log(printDay(3));
  console.log(printDay(6));
  console.log(printDay(56));
