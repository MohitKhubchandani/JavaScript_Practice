// Leetcode Question createCounter


var createCounter = function(n) {
    
    return function() {
        return n++    
    };
};


  const counter = createCounter(10)
  console.log(counter()) // Output :- 10
  console.log(counter()) // Output :- 11
  console.log(counter()) // Output :- 12