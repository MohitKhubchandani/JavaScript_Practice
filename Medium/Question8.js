// Function Factory
// Create a function that takes a "base number" as an argument. This function should return another function which takes a new argument, and returns the sum of the "base number" and the new argument.

// Please check the examples below for a clearer representation of the behavior expected.

// Examples

// // Calling makePlusFunction(5) returns a new function that takes an input,
// // and returns the result when adding 5 to it.

// const plusFive = makePlusFunction(5)

// plusFive(2) ➞ 7

// plusFive(-8) ➞ -3

// // Calling makePlusFunction(10) returns a new function that takes an input,
// // and returns the result when adding 10 to it.

// const plusTen = makePlusFunction(10)

// plusTen(0) ➞ 10

// plusTen(188) ➞ 198

// plusFive(plusTen(0)) ➞ 15

function makePlusFunction(parameter1) {
    return function (parameter2) {
        return parameter2 + parameter1;
    }
    
}

const plusFive = makePlusFunction(5)

console.log(plusFive(2)); // Output :- 7

console.log(plusFive(-8)); // Output :- -3

const plusTen = makePlusFunction(10)

console.log(plusTen(0)); // Output :- 10

console.log(plusTen(188));// Output :- 198

console.log(plusFive(plusTen(0))); // Output :- 15