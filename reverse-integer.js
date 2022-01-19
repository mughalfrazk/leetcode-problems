/* 
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
*/

/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
	let negative = false;
	if (String(x)[0] === "-") negative = true;
	num = parseFloat(String(x).split("").reverse().join(""));
	if (Math.pow(-2, 31) <= num && num < Math.pow(2, 31)) {
		if (negative) return -Math.abs(num);
		else return num;
	}
	return 0;
};