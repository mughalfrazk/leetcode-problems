/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)).
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
	arr = nums1.concat(nums2).sort((a, b) => a - b);
	half = arr.length / 2;
	if (arr.length % 2 === 0) return (arr[half - 1] + arr[half]) / 2;
	else return arr[half - 0.5];
};