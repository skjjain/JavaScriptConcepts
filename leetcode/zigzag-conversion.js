//https://leetcode.com/problems/zigzag-conversion/

/*
Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
Example 3:

Input: s = "A", numRows = 1
Output: "A"
*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let rows = [];
  let currentPos = 0
  let colCount = parseInt((s.length / (numRows-1))) + 1
  for (let c = 0; c < colCount; c++) {
    for (let r = 0; r < numRows; r++) {
        rows[r] = rows[r] || []
        rows[r][c] = ''
        if(c%(numRows-1) == 0){
            rows[r][c] = s[currentPos]
            currentPos++
        }
        
    }
  }
  return rows;
};

console.log(convert("PAYPALISHIRING", 3));
//Unifinished