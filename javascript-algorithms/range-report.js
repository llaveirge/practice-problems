// rangeReport
/* TASK:
  Define a function named getRangeReport with two parameters, start and end.
  The function should return an object containing several properties holding
  information about the numbers between start and end. Both start and end should
   be included in the range of numbers used for all steps.
   Start and end are guaranteed to be integers. Start is guaranteed to be less
   than or equal to end. The returned object should have the following
   properties:
    - total - the sum of all integers from start to end.
    - odds - an array containing all of the odd integers from start to end.
    - evens - an array containing all of the even integers from start to end.
    - range - an array containing all integers from start to end.
    - average - the average of all integers from start to end.
  - input: integers, output: object.
  - start and end should be included. */

  function getRangeReport(start, end) {

    const rangeReport = {};
    const range = [];
    const evens = [];
    const odds = [];
    let total = 0;

    // fill 'range' array with all integers between 'start' and 'end':
    for (let i = start; i <= end; i++) {
      range.push(i);
    }
    rangeReport.range = range;

    // find total of all integers:
    for (let j = 0; j < range.length; j++) {
      total += range[j];
    }
    rangeReport.total = total;

    // find average of all integers:
    rangeReport.average = total / range.length;

    // find even integers and add to 'evens' array:
    for (let int of range) {
      if (int % 2 === 0) {
        evens.push(int);
      }
    }
    rangeReport.evens = evens;

    // find odd integers add to 'odds' array:

    for (let int of range) {
      if (int % 2 !== 0) {
        odds.push(int);
      }
    }

    rangeReport.odds = odds;

    return rangeReport;
}

console.log('Range: 1-6 =', getRangeReport(1, 6));
console.log('Range: 2-12=', getRangeReport(2, 12));
