// Which Generation Are You?

// Try finding your ancestors and offspring with code.

// Create a function that takes a number x and a character y (m for male, f for female), and returns the name of an ancestor (m/f) or descendant (m/f).

// If the number is negative, return the related ancestor.
// If positive, return the related descendant.
// You are generation 0. In the case of 0 (male or female), return "me!".
// Examples
// generation(2, f) ➞ "granddaughter"

// generation(-3, m) ➞ "great grandfather"

// generation(1, f) ➞ "daughter"

// Gen 	Male	             Female
// -3	great grandfather	great grandmother
// -2	grandfather	        grandmother
// -1	father	            mother
// 0	me!             	me!
// 1	son	                daughter
// 2	grandson	        granddaughter
// 3	great grandson	    great granddaughter

let m = ["me!", "son", "grandson", "great grandson"];
let f = ["me!", "daughter", "granddaughter", "great granddaughter"];

let old1 = ["father", "grandfather", "great grandfather"];
let old2 = ["mother", "grandmother", "great grandmother"];

function generation(generation, gender) {
    if (generation < 0) {
        let oldArray = (gender === m) ? old1 : old2;
        console.log(oldArray[Math.abs(generation) - 1]);
    } else {
        let temp = gender[generation];
        gender = f[temp];
        console.log(temp);
    }
}



generation(2, f) //Output :- "granddaughter"

generation(-3, m) //Output :- "great grandfather"

generation(1, f) //Output :- "daughter"