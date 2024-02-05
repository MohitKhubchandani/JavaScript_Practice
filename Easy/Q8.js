// Find the Amount of Potatoes

// Create a function to return the amount of potatoes there are in a string.

// Examples

// potatoes("potato") ➞ 1

// potatoes("potatopotato") ➞ 2

// potatoes("potatoapple") ➞ 1

function potatoes(parameter){
    const regex = /potato/g;
    const match = parameter.match(regex);
    const len = match.length;
    return len;
}

console.log(potatoes("potato")); //Output :- 1 
console.log(potatoes("potatopotato")); //Output :- 2

