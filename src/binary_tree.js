/* ----------------------
Note: BEFORE tackling the class below,
read the tests in the test file.
The last method lowestCommonAncestor is optional. Complete it only if you could tackle all the rest.
---------------------- */

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // adds node to left if value is less than or equal to this.value
  // adds node to right if value is greater than node
  add(value) {
    if (value <= this.value) {
      if (this.left) {
        this.left.add(value);
      } else {
        this.left = new BinaryTree(value);
      }
    } else {
      if (this.right) {
        this.right.add(value);
      } else {
        this.right = new BinaryTree(value);
      }
    }
  }
  // working
  // returns true or false if the value is in the tree
  contains(value) {
    if (value === this.value) {
      return true;
    }
    if (this.left && this.left.contains(value)) {
      return true;
    }
    if (this.right && this.right.contains(value)) {
      return true;
    }
    return false;
  }
  // working
  // apply callback in this order: left node, current node, right node
  traverseDepthFirstInOrder(fn) {
    if (this.left) {
      this.left.traverseDepthFirstInOrder(fn);
    }
    fn(this);
    if (this.right) {
      this.right.traverseDepthFirstInOrder(fn);
    }
  }
  //depth first pre-order
  // returns an array of all values in the tree in depth first preorder (current, left, right)
  getValues() {
    let result = [];
    function traverse(node) {
      // if (node.value) {//not needed
      //   //check there is a root node and push the value to the array
      //   result.push(node.value); //ok
      // }
      result.push(node.value);

      if (node.left) {
        //check there is a left, traverse it and push it on the result array
        traverse(node.left);
      }
      //check there is a right and traverse it - does the same as above
      node.right && traverse(node.right);
    }

    traverse(this);
    return result;
  }

  // working - Jim did this with print not a callback!
  // apply callback from left to right across each level
  // hint: use a queue for this!
  traverseBreadthFirst(fn) {
    let queue = [];
    queue.push(this);
    while (queue.length) {
      let node = queue.shift();
      fn(node);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  // OPTIONAL
  // working
  // Finds the lowest common ancestor given 2 node values
  // restrictions: val1 < val2
  // return the LCA (the node)
  // returns null if any of the values are not in the tree

  lowestCommonAncestor(val1, val2) {
    if (val1 < this.value && val2 < this.value && this.left) {
      return this.left.lowestCommonAncestor(val1, val2);
    }

    if (val1 > this.value && val2 > this.value && this.right) {
      return this.right.lowestCommonAncestor(val1, val2);
    }

    if (this.contains(val1) && this.contains(val2)) {
      return this;
    }
    return null;
  }
}

module.exports = BinaryTree;
