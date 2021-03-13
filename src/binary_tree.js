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

  // working - Jim did this
  // adds node to left if value is less than or equal to this.value
  // adds node to right if value is greater than node
  add(value) {
    if (value < this.value) {
      //if it's smaller than the root
      if (this.left) {
        //if left exists
        this.left.add(value); //if there is a left child, call the add method recursively on it
      } else {
        //save value as new left child if there isn't a left child
        this.left = new BinaryTree(value);
      }
    } else {
      if (this.right) {
        //if right exists
        this.right.add(value);
      } else {
        this.right = new BinaryTree(value); // if the right child space is free - add node here
      }
    }
  }
  // working
  // returns true or false if the value is in the tree
  // contains(value) {
  //   if (value === this.value) {
  //     //check the root and then the left and right
  //     return true;
  //   } else if (this.left && value < this.value) {
  //     //check left exists and if value is <  root
  //     return this.left.contains(value); //check the whole left
  //   } else if (this.right && value > this.value) {
  //     //check right exists and if value is > root
  //     return this.right.contains(value); //check the whole right
  //   }
  //   return false; //value not found
  // }
  // working
  contains(value) {
    if (value === this.value) {
      return true; //if the root and value are the same
    }
    if (this.left && this.left.contains(value)) {
      //if there is a left and you can recursively call it
      return true; //do this
    }
    if (this.right && this.right.contains(value)) {
      // if there is a right and you can call the fn on it
      return true; //do this
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
    //doesn't work - figure out why
    // if (node && this.left) {
    //   fn(this.left);
    // } else if (node) {
    //   fn(node);
    // } else if (node && this.right) {
    //   fn(this.right);
    // }
  }
  // working - Jim did this with print not a callback!
  // apply callback from left to right across each level
  // hint: use a queue for this!
  traverseBreadthFirst(fn) {
    //initialise
    let queue = []; //create a queue
    queue.push(this); //push the tree onto the queue
    //while there's sth in the queue
    while (queue.length) {
      //remove node from queue while/if there is sth in the queue
      let node = queue.shift();
      fn(node);
      //enqueue children
      if (node.left) {
        //if there is a left node
        queue.push(node.left); //push it onto the queue
      }
      if (node.right) {
        //if there is a right node
        queue.push(node.right); //push it onto the queue
      }
      //fn(node); //recursive - keep going until there is nothing left in the queue
    }
  }

  // OPTIONAL
  // working
  // Finds the lowest common ancestor given 2 node values
  // restrictions: val1 < val2
  // return the LCA (the node)
  // returns null if any of the values are not in the tree

  // will only need to go down the left as the right will have higher values
  lowestCommonAncestor(val1, val2) {
    //if root is val1 - then look down right?
    //if root is val2 - then look down left only
    //if both values are < this.value, try to go left
    if (val1 < this.value && val2 < this.value && this.left) {
      return this.left.lowestCommonAncestor(val1, val2); //not sure on this
    }
    // both values > this.value, try to go right
    if (val1 > this.value && val2 > this.value && this.right) {
      return this.right.lowestCommonAncestor(val1, val2); //not sure on this
    }
    //if it isn't left/right, maybe current node is the LCA
    if (this.contains(val1) && this.contains(val2)) {
      return this;
    }
    return null;
  }
}

module.exports = BinaryTree;
