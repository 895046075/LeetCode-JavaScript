/*
Source : https://leetcode.com/problems/add-binary/description/
Given two binary strings,
return their sum(also a binary string).

For example,
a = "11"
b = "1"
Return "100".
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

var addBinary = function(a, b) {
	a = a.split('').reverse();
	b = b.split('').reverse();

	var c = [];
	var add = 0;

	for (var i = 0, len = Math.max(a.length, b.length); i < len; i++) {
		var sum = (a[i] === undefined ? 0 : Number(a[i])) + (b[i] === undefined ? 0 : Number(b[i])) + add;
		c[i] = sum & 1;
		if (sum >= 2)
			add = 1;
		elseadd = 0;
	}

	if (add)
		c[len] = 1;

	return c.reverse().join('').toString();
};
