// A Redundant Function
// Write a function redundant that takes in a string str and returns a function that returns str.

// Examples
// const f1 = redundant("apple")
// f1() ➞ "apple"

// const f2 = redundant("pear")
// f2() ➞ "pear"

// const f3 = redundant("")
// f3() ➞ ""

function redundant(str){
    return function(){
        return str;
    }
}


const f1 = redundant("apple");
console.log(f1()); // Output: "apple"

const f2 = redundant("pear");
console.log(f2()); // Output: "pear"

const f3 = redundant("");
console.log(f3()); // Output: ""
