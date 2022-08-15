/**
 * @param {string} s
 * @return {number}
 */

const roman = { 'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000 }

var romanToInt = function(S) {
    let outputNumber = 0;
    
    for (let i = S.length-1; ~i; i--) {
        let number = roman[S.charAt(i)];
        
        if (4 * number < outputNumber) {
            outputNumber -= number;
        } else {
            outputNumber += number;
        }
        
    }
    
    return outputNumber;
};