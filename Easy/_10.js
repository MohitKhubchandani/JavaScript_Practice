// Are the Numbers Equal?
// Create a function that returns true when num1 is equal to num2; otherwise return false.

// Examples
// isSameNum(4, 8) ➞ false

// isSameNum(2, 2) ➞  true

// isSameNum(2, "2") ➞ false


function isSameNum(num1, num2){
    if (num1 === num2) {
        return true;
    }else {
        return false
    }
}

console.log(isSameNum(4 , 8)); // Output :- false
console.log(isSameNum(2 , 2)); // Output :- true
console.log(isSameNum(2 , "2")); // Output :- false