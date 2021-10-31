// https://leetcode.com/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let isPalndrome = function (s) {
    if (s.length == 1) return true;
    if (s.length % 2 == 0) {
      let left = s.slice(0, s.length / 2);
      let right = s
        .slice(s.length / 2)
        .split("")
        .reverse()
        .join("");
      return left == right;
    } else {
      let left = s.slice(0, (s.length - 1) / 2);
      let right = s
        .slice((s.length + 1) / 2)
        .split("")
        .reverse()
        .join("");
      return left == right;
    }
  };
  if (isPalndrome(s)) return s;
  let maxLength = s.length - 1;
  while (maxLength > 1) {
    for (let i = 0; i <= s.length - maxLength; i++) {
      let subStr = s.slice(i, i + maxLength);
      if (isPalndrome(subStr)) {
        return subStr;
      }
    }
    maxLength--;
  }
  return s[0];
};
//This function failed on providing very long string as Time Complexity is O(n^3)

//Then read this https://www.geeksforgeeks.org/longest-palindrome-substring-set-1/

// Learn dynamic programming to do this problem the right way

var longestPalindrome = function (s) {
    
};



[
  ["abba", "abba"],
  ["abbbd", "bbb"],
  ["abcaacd", "caac"],
].forEach((s) =>
  console.log(
    "Expected output",
    `'${s[0]}'`,
    "=>",
    s[1],
    "------- Output =>",
    longestPalindrome(s[0])
  )
);
