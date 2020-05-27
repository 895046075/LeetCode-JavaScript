/*
https://leetcode-cn.com/problems/reverse-integer/
给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

示例 1:
输入: 123
输出: 321

示例 2:
输入: -123
输出: -321

示例 3:
输入: 120
输出: 21

*/

/**
 * @param {number} x
 * @return {number}
 */
let reverse = function (x) {
  let sign = (x > 0) ? 1 : -1;
  x = Math.abs(x);
  let str = x.toString().split('').reverse().join('');
  let result = sign * Number(str);
  if (result > 2147483647 || result < -2147483648) {
    return 0;
  } else
    return result;
};
