/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.s1 = [];
  this.s2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  var size = this.s2.length;
  if (size > 0 && x <= this.s2[size-1]) {
    this.s2.push(x);
  } else if (size === 0) {
    this.s2.push(x);
  }
  
  this.s1.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  var size = this.s2.length;
  var ele = this.s1.pop();
  if (size > 0 && ele === this.s2[size-1]) {
    this.s2.pop();
  }
  
  return ele;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  var size = this.s1.length;
  var result = null;
  if (size > 0) {
    result = this.s1[size-1];
  }
  
  return result;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  var size = this.s2.length;
  var result = null;
  if (size > 0) {
    result = this.s2[size-1];
  }
  
  return result;
};
