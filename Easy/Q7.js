// Basic Variable Assignment

// A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Hello" and store it in a variable called result. He needs your help to fix this code.

// Examples

// nameString("Mubashir") ➞ "Hello Mubashir"

// nameString("") ➞ "Hello Matt"

// nameString("javaScript") ➞ "Hello javaScript"

function nameString(parameter){
    
    const concat = "Hello ".concat(parameter);

    return concat;
}

const Output = nameString("Matt");

console.log(Output); // Output :- Hello Matt