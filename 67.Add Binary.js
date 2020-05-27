/*
https://leetcode-cn.com/problems/add-binary/
给你两个二进制字符串，返回它们的和（用二进制表示）。
输入为 非空 字符串且只包含数字 1 和 0。
示例 1:
输入: a = "11", b = "1"
输出: "100"

示例 2:
输入: a = "1010", b = "1011"
输出: "10101"
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

let addBinary = function(a, b) {
	a = a.split('').reverse();
	b = b.split('').reverse();

	let c = [];
	let add = 0;
	let len = Math.max(a.length, b.length)

	for (let i = 0; i < len; i++) {
		let sum = (a[i] === undefined ? 0 : Number(a[i])) + (b[i] === undefined ? 0 : Number(b[i])) + add;
		c[i] = sum & 1;
		if (sum >= 2)
			add = 1;
		else add = 0;
	}

	if (add)
		c[len] = 1;

	return c.reverse().join('').toString();
};
