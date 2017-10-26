/*
Source : https://leetcode.com/problems/search-insert-position/description/
iven a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Here are few examples.
[1,3,5,6], 5 → 2
[1,3,5,6], 2 → 1
[1,3,5,6], 7 → 4
[1,3,5,6], 0 → 0
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
	var hash = [];
	for (var i = 0, len = nums.length; i < len; i++)
		hash[nums[i]] = i;
	if (hash[target] !== undefined)
		return hash[target];

	nums[-1] = -Number.MAX_VALUE;
	nums[len] = Number.MAX_VALUE;

	for (var i = 0; i <= len; i++)
		if (nums[i - 1] < target && target < nums[i])
			return i;
};
