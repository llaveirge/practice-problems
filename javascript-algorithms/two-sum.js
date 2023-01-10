// two-sum

/*
TASK: Given an array of integers "nums" and an integer "target", return
indices of the two numbers such that they add up to target. You may assume that
each input would have exactly one solution, and you may not use the same element
twice.You can return the answer in any order.

Constraints:
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

input: array and integer, output: array

Define a function named twoSum which accepts 2 parameters: 'nums'
and 'target'
Create an empty array called 'indexArr' to store return indexes in
Iterate through the 'nums' parameter
Assign the value of the second index to a variable (j), and while iterating
through the 'nums' array, increment by factor of one, ensuring it remains less
than the length of the 'nums' array - this will be the index the current index
(i) will be compared to.
Prevent the current index from comparing against itself by disallowing 'i' and
'j' from storing the same value.
If 'i' and 'j' are not the same value and if the sum of nums[i] and
indexArray[j] equals the 'target parameter, push both of those index numbers,
'i' and 'j' into the 'indexArr'.
Then return the 'indexArr'.
If there are no two indexes that can sum up to the target value, return a
message.
*/

const twoSum = function(nums, target) {
    const indexArr = [];

    for( let i = 0; i < nums.length; i++ ) {
        for( let j = 1; j < nums.length; j++) {
            if( i !== j && nums[i] + nums[j] === target) {
                indexArr.push(i);
                indexArr.push(j);
                return indexArr;
            }
        }
    }

    return 'The target value cannot be reached with stored numbers'
};

const numbers = [2, 5, 7, 9, 23];
console.log('"nums" parameter:', numbers);

const value = 28;
console.log('"target" parameter:', value);

console.log( 'TwoSum solutions:', twoSum(numbers, value));
