// Return the First Element in an Array

// Create a function that takes an array containing only numbers and return the first element.

// Examples

// getFirstValue(1, 2, 3) ➞ 1

// getFirstValue(80, 5, 100) ➞ 80

// getFirstValue(-500, 0, 50) ➞ -500

function firstElement(...parameter){

    const shift = [...parameter].shift()

    return shift;
}

const output = firstElement(80, 5, 100);
console.log(output); // Output :- 80



