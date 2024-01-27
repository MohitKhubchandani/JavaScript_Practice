// Find the Smallest and Biggest Numbers

// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

// Examples

// minMax(1, 2, 3, 4, 5) ➞ [1, 5]

// minMax(2334454, 5) ➞ [5, 2334454]

// minMax(1) ➞ [1, 1]



function minMax(...value){

  const sort = [...value].sort()
  const min = Math.min(...sort)
  const max = Math.max(...sort)
  
  return [min ,max];
}

const Output = minMax(2334454, 5)
console.log(Output); // Output :- [ 5, 2334454 ]
