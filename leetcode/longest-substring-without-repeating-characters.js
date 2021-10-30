//https://leetcode.com/problems/longest-substring-without-repeating-characters/

var lengthOfLongestSubstring = function (s) {
  let firstLongest = "";
  let secondLongest = "";
  for (let i = 0; i < s.length; i++) {
    secondLongest = "";
    for (let j = i; j < s.length; j++) {
      if (secondLongest.indexOf(s[j]) == -1) {
        secondLongest += s[j];
      } else {
          break;
      }
    }
    if (secondLongest.length > firstLongest.length) {
      firstLongest = secondLongest;
    }
  }

  return firstLongest.length;
};

[
  ["jbpnbwwd", 4],
  ["abcabcdabcde", 5],
  ["abcaabcd", 4],
  ["", 0],
  [" ", 1],
].forEach((s) =>
  console.log(
    "Expected output",
    `'${s[0]}'`,
    "=>",
    s[1],
    "------- Output =>",
    lengthOfLongestSubstring(s[0])
  )
);
