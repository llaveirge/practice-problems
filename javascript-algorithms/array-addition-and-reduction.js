// array addition and reduction

const arrAdditionReduction = (arr, command, location, value) => {
  if ( command.toLowerCase() !== 'add' && command.toLowerCase() !== 'reduce' ) {
    return 'Please enter "add" or "reduce".';
  }

  if ( location.toLowerCase() !== 'beginning' && location.toLowerCase() !== 'end' ) {
    return 'Pease enter "beginning" or "end".';
  }

  if ( command.toLowerCase() === 'add' && value === undefined ) {
    return 'Please enter a value.';
  }

  if ( command.toLowerCase() === 'remove' ) {
    if ( location.toLowerCase() === 'beginning' ) {
      return arr.shift();
    } else {
      return arr.pop();
    }
  }

  if ( command.toLowerCase() === 'add' ) {
    if ( location.toLowerCase() === 'beginning' ) {
      arr.unshift(value);
      return arr;
    } else {
      arr.push(value);
      return arr;
    }
  }
}
