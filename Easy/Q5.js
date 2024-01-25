// Add up the Numbers from a Single Number

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// Examples

// addUp(4) ➞ 10

// addUp(13) ➞ 91

// addUp(600) ➞ 180300

let Num = 0;

function addUp(parameter) {
    for (let index = 1; index <= parameter; index++) {
        Num = Num + index ;
    }
    return Num
}

const output = addUp(600)

console.log(output);