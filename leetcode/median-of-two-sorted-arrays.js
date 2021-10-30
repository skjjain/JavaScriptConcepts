//https://leetcode.com/problems/median-of-two-sorted-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let nums = [...nums1, ...nums2].sort((a, b) => a-b); 
  if (nums.length % 2 == 0) {
    return (nums[nums.length / 2 - 1] + nums[nums.length / 2]) / 2;
  } else {
    return nums[(nums.length - 1) / 2];
  }
};

//sort function by default sorts on string value and would make 80 less than 9
console.log([9,80,70,99].sort());
//to fix this use compare function
console.log([9,80,70,99].sort((a, b) => a-b));

[
  [[[3], [-2, -1]], -1],
  [
    [
      [1, 2],
      [3, 4],
    ],
    2.5,
  ],
  [[[1, 3, 4], [4]], 3.5],
  [[[1, 3], [2]], 2],
].forEach((s) =>
  console.log(
    "Expected output",
    `'${s[0][0]}'`,
    `& '${s[0][1]}'`,
    "=>",
    s[1],
    "------- Output =>",
    findMedianSortedArrays(s[0][0], s[0][1])
  )
);
