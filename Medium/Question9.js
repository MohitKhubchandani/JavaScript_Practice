// LeetCode
// 344. Reverse String

// Hint

// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

 

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]
 

// Constraints:

// 1 <= s.length <= 105
// s[i] is a printable ascii character.


var reverseString = function(s) {

    let i = 0;
    let  j = s.length - 1;
    while(i <= j){
        // swapping the values
        let temp = s[i]
        s[i] = s[j]
        s[j] = temp
        // move to the next positions
        i++
        j--
    }return s;
};

const Output = reverseString(["h","e","l","l","o"])
console.log(Output); // Output :- [ 'o', 'l', 'l', 'e', 'h' ]