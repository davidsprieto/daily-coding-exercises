// DAILY LEETCODE CODING EXERCISES:


// 01/08/2023 - 1480. Running Sum of 1D Array:
//
// let nums = [1, 2, 3, 4];
//
// const runningSum = (nums) => {
//     for (let i = nums.length - 1; i >= 0; i--) {
//         for (let j = 0; j < i; j++) {
//             nums[i] += nums[j];
//         }
//     }
//     return nums;
// }
//
// console.log(runningSum(nums));


// 01/09/2023 - 724. Find Pivot Index:
//
// let nums = [-1, -1, 0, 0, -1, -1];
//
// const pivotIndex = (nums) => {
//     let counting = true;
//     let index = 0;
//
//     while (counting) {
//         let leftSum = 0;
//         let rightSum = 0;
//
//         for (let j = 0; j < index; j++) {
//             leftSum += nums[j];
//         }
//
//         for (let i = nums.length - 1; i > index; i--) {
//             rightSum += nums[i];
//         }
//
//         if (leftSum === rightSum) {
//             return index;
//         }
//
//         if (index === nums.length - 1) {
//             return -1;
//         }
//         index++;
//     }
// }
//
// console.log(pivotIndex(nums));
