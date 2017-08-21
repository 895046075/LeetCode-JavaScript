/*
Source : https://leetcode.com/problems/3sum/description/
Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
Note: The solution set must not contain duplicate triplets.
For example, given array S = [-1, 0, 1, 2, -1, -4],
A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums){
	var a = [];
	var result = [];
	for(var i=0; i<nums.length; i++){
		for(var j=i+1; j<nums.length; j++){
			for(var k=j+1; k<nums.length; k++){
				if(nums[i] + nums[j] + nums[k] === 0){
					a = [nums[i],nums[j],nums[k]];
					result.push(a);
				}
			}
		}
	}
	return result;
};
