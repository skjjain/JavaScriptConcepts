//https://leetcode.com/problems/reverse-integer/

var reverse = function(x) {
    let sign = ''
    if(x < 0){
        sign = '-'
    }
    return parseInt(sign+x.toString().split('').reverse().join(''))
};


[
    [321, 123],
    [320, 23],
    [-320, -23],
  ].forEach((s) =>
    console.log(
      "Expected output",
      `'${s[0]}'`,
      "=>",
      s[1],
      "------- Output =>",
      reverse(s[0])
    )
  );