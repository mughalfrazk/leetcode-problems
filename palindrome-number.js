/*
Given an integer x, return true if x is palindrome integer.
An integer is a palindrome when it reads the same backward as forward.
For example, 121 is a palindrome while 123 is not.
*/

/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    // y = String(x);
	// if (y.length === 1) return true;
	// for (let i = 0; i < y.length; i++) {
	// 	console.log(y[i], " ", y[y.length - 1 - i]);
	// 	if (y[i] === y[y.length - 1 - i]) {
	// 		if (y.length % 2 === 0 && i === Number(y.length / 2 - 1)) {
	// 			console.log("Even");
	// 			return true;
	// 		} else if (y.length % 2 !== 0 && i === Number(y.length / 2 - 0.5)) {
	// 			console.log("Odd");
	// 			return true;
	// 		}
	// 	} else {
	// 		return false;
	// 	}
	// }
	y = String(x);
	let start = 0;
	let end = y.length - 1;
	while (start < end) if (y[start++] !== y[end--]) return false;
	return true;
};