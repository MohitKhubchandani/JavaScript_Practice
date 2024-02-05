// How Much is True?

// Create a function which returns the number of true values there are in an array.

// Examples

// countTrue([true, false, false, true, false]) ➞ 2

// countTrue([false, false, false, false]) ➞ 0

// countTrue([]) ➞ 0



function countTrue(...para){

    let filter = para.filter(function(element) {
        return element == true
    })

    return filter.length;


}

let Output = countTrue(true, false, false, true, false)
console.log(Output); // Output :- 2



