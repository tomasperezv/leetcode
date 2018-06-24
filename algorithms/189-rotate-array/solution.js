/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void}
 */
var rotate = function(nums, k) {
  var j = 0;
  var size = nums.length;
  
  if (k > size) {
    k -= size;
  }
  
  while (j < (size - 1) && k > 0) {
    subrotation(nums, j, k);
    j += k;
  }
};

/**
 * @param {number[]} nums
 * @param {number} i
 * @param {number} k
 */
var subrotation = function(nums, i, k) {
  var size = nums.length;
  var j = 0;
  
  while (j < k) {
    var leftPos = i + j;
    var rightPos = size - (k-j);
    
    swap(nums, leftPos, rightPos);
   
    j++;
  }
};

/**
 * @param {Number[]} nums
 * @param {Number} i
 * @param {Number} j
 */
var swap = function(nums, i, j) {
  if (validIndex(nums, i) && validIndex(nums, j)) {
    var tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;   
  }
};

/**
 * @param {Number[]} nums
 * @param {Number} i
 */
var validIndex = function(nums, i) {
  return (i >= 0 && i < nums.length);
};
