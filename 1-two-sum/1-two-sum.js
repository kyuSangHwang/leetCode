/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let result = new Map();
    
    for (let i = 0; i < nums.length; i ++) {
        
        if (result.has(target - nums[i])) {
            return [result.get(target - nums[i]), i];
            
        } else {
            result.set(nums[i], i);
            
        }
        
    }
    
	return;
    
};