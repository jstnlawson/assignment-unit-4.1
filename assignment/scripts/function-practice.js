console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'

//It eventually occured to me that I over thought this one but this also worked.
//Let me know if I shouldn't include this sort of thing in future assignments.

// let nameString = [];

// function helloName(name) {
//   console.log(`Hello, ${name}!`);
//   nameString.push(name);
//   return nameString;
// }

// helloName('Jimbo');

function helloName(name) {
  let answer = `Hello, ${name}!`;
  return answer;
}

console.log(helloName('Jimbo'))

// Remember to call the function to test


// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  let answer = firstNumber + secondNumber;
  return answer;
  // return firstNumber + secondNumber;
}

console.log(addNumbers(1, 2));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num0, num1, num2) {
  let answer = num0 * num1 * num2;
  return answer;
}

console.log(multiplyThree(2, 4, 2));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }else{
  return false;
  }
}

console.log(isPositive (1));
console.log(isPositive (-1));

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('isPositive - should say true', isPositive(3));
console.log('isPositive - should say false', isPositive(0));
console.log('isPositive - should say false', isPositive(-3));


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let array = [7, 8, 4];

function getLast(array) {
  let lastElement = array[array.length-1];
  if (array.length > 0) {
  return lastElement;
  } else {
  return 'undefined';
  }
}

console.log(getLast(array));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

let value = 4;

function find(value, array) {
  for (numberFour of array) {
    if (numberFour === value) {
      return true;
    }
  } 
    return false;
    //it took some research to figure out I was putting the 
    //"return false;" in the wrong place
}

console.log(find(value, array)); 
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (letter === string.at(0)) {
    return true;
  } else {
    return false;
  }
}
console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));

// 9. Function to return the sum of all numbers in an array


function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
for (let i = 0; i < array.length; i++ ) {
  sum += array[i];
  }
  return sum;
}
// TODO: return the sum

console.log(sumAll(array));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
let posAndNegArray = [-1, -5, 2, 6, -6, 7];

function allPositive(posAndNegArray) {
  const aboveZero = posAndNegArray.filter(num => num > 0); //I think this is defining num
  return aboveZero;
}

console.log(allPositive(posAndNegArray));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

//Create a function that takes two numbers as arguments and returns their sum.

function addition(a, b) {
	let sum = a + b;
	return sum;
}

console.log(addition(1, 2));


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}