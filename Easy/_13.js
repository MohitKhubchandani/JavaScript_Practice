// Write a function called sumArray that takes an array of numbers as input and returns the sum of 
// all the numbers in the array. 
// However, if the array contains any negative numbers, ignore those numbers in the sum calculation.
let a = []

function sumArray(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) { // Ignore negative numbers
            sum += arr[i];}}
return sum
}

console.log(sumArray([1, 2, 3, 4, 5])); // Output :-  15
console.log(sumArray([1, -2, 3, -4, 5])); // Output :- 9
console.log(sumArray([-1, -2, -3, -4, -5])); // Output :- 0


