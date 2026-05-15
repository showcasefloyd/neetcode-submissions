class Solution {

    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
         return nums.some((i, index) => nums.indexOf(i) !== index); 
    }
}


let s = new Solution;
s.hasDuplicate([1,2,3,3])