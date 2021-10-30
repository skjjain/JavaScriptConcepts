// https://leetcode.com/problems/add-two-numbers/

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

/**
 * Object for singly-linked list.
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
  this.toString = function () {
    let out = [];
    let self = this;
    while (self) {
      out.push(self.val);
      self = self.next;
    }
    return out;
  };
}

var addTwoNumbers = function (l1, l2) {
  let cF = 0;
  let out = new ListNode();
  let start = out;
  while (l1 || l2) {
    let tmp = cF;
    cF = 0;
    if (l1) {
      tmp += l1.val;
    }
    if (l2) {
      tmp += l2.val;
    }

    if (tmp > 9) {
      cF = parseInt(tmp / 10);
      tmp = tmp % 10;
    }
    out.val = tmp;
    if (l1) {
      l1 = l1.next;
    }

    if (l2) {
      l2 = l2.next;
    }
    if (l1 || l2) {
      out.next = new ListNode();
      out = out.next;
    } else if (cF > 0) {
      out.next = new ListNode(cF);
    }
  }

  return start;
};

let l1 = new ListNode();
l1.val = 9;
let l1_2 = new ListNode();
l1_2.val = 9;
l1.next = l1_2;
let l1_3 = new ListNode();
l1_3.val = 9;
l1_2.next = l1_3;

let l2 = new ListNode();
l2.val = 9;
let l2_2 = new ListNode();
l2_2.val = 9;
l2.next = l2_2;
let l2_3 = new ListNode();
l2_3.val = 9;
l2_2.next = l2_3;
let l2_4 = new ListNode();
l2_4.val = 9;
l2_3.next = l2_4;

console.log(
  l1.toString(),
  "+",
  l2.toString(),
  "=",
  addTwoNumbers(l1, l2).toString()
);
//[ 1, 2, 3 ] + [ 1, 8, 3, 9 ] = [ 2, 0, 7, 9 ]
//[ 9, 9, 9 ] + [ 9, 9, 9, 9 ] = [ 8, 9, 9, 0, 1 ]