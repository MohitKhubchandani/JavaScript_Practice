// The Farm Problem

// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs

// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

// Examples

// animals(2, 3, 5) ➞ 36

// animals(1, 2, 3) ➞ 22

// animals(5, 2, 8) ➞ 50


function farm(chicken , cow , pig , cb1 , cb2) {
        const result1 = cb1(chicken);
        const result2 = cb2(cow);
        const result3 = cb2(pig);
        return result1 +  result2 + result3;
 }

 function twoLegs(para) {
        const res = para * 2;
        return res;
 }
 
 
 function fourLegs(para) {
        const res = para * 4;
        return res;
 }


 const output = farm(5 , 2 , 8 , twoLegs , fourLegs , fourLegs)
 console.log(output);// output :- 50

// i marked this as a Medium level question because i used callback functions in this question.
 