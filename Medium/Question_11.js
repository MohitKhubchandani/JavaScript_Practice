// LeetCode 977. Squares of a Sorted Array

// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.

function sortedSquare(nums){
    let n = nums.length; 
    let result = Array(n) 
    let left = 0 , right = nums.length - 1; 
    for (let i = right ; i >= 0 ; i--){ 
      if(nums[left] ** 2 < nums[right]**2){ 
        result[i] = nums[right]**2 
        right-- 
      }
      else{
        result[i] = nums[left]**2 
        left++ 
    }
     }
    return result;
}


const Output1 = sortedSquare([-4,-1,0,3,10])
console.log(Output1); // Output :- [ 0, 1, 9, 16, 100 ]

const Output2 = sortedSquare([-7,-3,2,3,11])
console.log(Output2); // Output :- [ 4, 9, 9, 49, 121 ]