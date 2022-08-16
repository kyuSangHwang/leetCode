/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    if (x < 0) {
        return false;
    }
	
    const reverseX = `${x}`.split('').reverse().join('');
    
    return x == reverseX;
};
