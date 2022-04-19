
function negate(a) {
  return !a;
};

function both(a, b) {
  return a && b;
};

function either(a, b) {
  return a || b; 
};

function none(a, b) {
  // if (a === false && b === false) {
  //   return true;
  // } else {
  //   return false; // instead of this use shorthand below
  // }
  return !a && !b;
};

function one(a, b) {
  // if (a === true && b === false) {
  //   return true;
  // } else if (a === false && b === true) {
  //   return true;
  // } else {
  //   return false;
  // } // same as above use shorthand below
  return (a && !b) || (!a && b);
};

function truthiness(a) {
  return Boolean(a);
};

function isEqual(a, b) {
  return a === b;
};

function isGreaterThan(a, b) {
  return a > b;
};

function isLessThanOrEqualTo(a, b) {
  return a <= b;
};

function isOdd(a) {
  if (a % 2 === 1) {
    return true;
  }
  return false;
  // use shorthand as above
};

function isEven(a) {
  if (a % 2 == 0 ) {
    return true; 
  } else {
    return false;
  }
  // use shorthand as above
};

function isSquare(a) {
  return Number.isInteger(Math.sqrt(a));
};

function startsWith(char, string) {
  if (string[0] === char) {
    return true; 
  } else {
    return false;
  }
  // use shorthand as above
};

function containsVowels(string) {
  // let pattern = /[aeiou]/i;
  // return pattern.test(string); //condense this bit and save creating a variable
  return /[aeiou]/i.test(string);
};

function isLowerCase(string) {
  // if ( string == string.toLowerCase()){
  //   return true;
  // } else {
  //   return false;
  // } // shorten this bit and also use the strict comparison operator
return string === string.toLowerCase();
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};