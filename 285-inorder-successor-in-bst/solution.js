/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
  if (p === null || root === null) {
    return null;
  }
  
  if (p.right !== null) {
    return min(p.right);
  }
  
  var lastGreatParent = null;
  var current = root;
 
  while (current !== null) {
    if (current.val === p.val) {
      return lastGreatParent;
    } else if (current.val > p.val) {
      if (current.left === null) {
        return null;
      }
      
      lastGreatParent = current.val;
      current = current.left;
    } else {
      if (current.right === null) {
        return null;
      }
      
      current = current.right;
    }
  }
};

/**
 * @param {TreeNode} root
 * @return {Number|null}
 */
var min = function(root) {
  var current = root !== null ? root : null;
  var min = null;
  while (current) {
    min = current.val;
    current = current.left;
  }
  
  return min;
};
