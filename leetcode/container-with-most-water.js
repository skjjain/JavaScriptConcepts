//https://leetcode.com/problems/container-with-most-water/

var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  while (left < right) {
    let tmp = 0;
    if (height[left] - height[right] < 0) {
      tmp = height[left] * (right - left);
      left++
    } else {
      tmp = height[right] * (right - left);
      right--
    }
    if (tmp > max) {
      max = tmp;
    }
    console.log(max);
  }
};

[[[1, 8, 6, 2, 5, 4, 8, 3, 7], 49]].forEach((s) =>
  console.log(
    "Expected output",
    `'${s[0]}'`,
    "=>",
    s[1],
    "------- Output =>",
    maxArea(s[0])
  )
);
