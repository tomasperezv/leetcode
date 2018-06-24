/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(root, k) {
  var result = [];
  
  var size = count(root);
  var average = Math.floor(size / k);
  var leftSize = size;
  var leftK = k;
 
  var current = root;
  var i = 0;
  while (i < k && current !== null) {
    var t = Math.floor(leftSize / leftK);
   
    if (leftSize % leftK !== 0) {
      t++;
    }
    
    leftSize -= t;
    leftK--;
    
    var target = split(current, t);
    result.push(target.new);
    current = target.rest;
    
    i++;
  }
  
  while (i < k) {
    result.push(null);
    i++;
  }
  
  return result;
};
         
/**
 * @param {ListNode} head
 * @return {Number}
 * @method count
 */
var count = function(head) {
  var size = 0;
  var current = head;
  while (current !== null) {
    current = current.next;
    size++;
  }

  return size;
};

/**
 * @param {ListNode} head
 * @param {Number} k
 * @method split
 */
var split = function(head, k) {
  var result = {
    new: head,
    rest: null
  };
  
  var i = 1;
  var current = head;
  while (i < k && current !== null) {
    current = current.next;
    i++;
  }
  
  if (current !== null) {
    var next = current.next;
    current.next = null;
    result.rest = next;
  }
  
  return result;
};
