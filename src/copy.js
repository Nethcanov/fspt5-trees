/* ----------------------
Note: BEFORE tackling the class below,
read the tests in the test file.

//Last three methods are optional. Complete them only if you could tackle all the rest.
---------------------- */

class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  // working - adds a child into the tree
  addChild(value) {
    // push a new tree into the current tree's children
    let newNode = new Tree(value); //node and tree can be used interchangeably - node can also be a tree (subtrees)
    this.children.push(newNode); //this represents the child obj - the tree itself
    //OR
    //   this.children.push(new Tree(value));
  }

  // working - returns true/false if the value is in the tree
  contains(value) {
    // if the tree value matches the value passed in
    if (this.value === value) {
      //this.children is an array - cannot compare array to number
      // return true
      return true;
    }
    // else
    // loop through all the children
    for (let child of this.children) {
      if (child.contains(value)) {
        // call the contains method located on each child (pass the value in)
        //had an extra line in here that was
        return true;
      }
      //OR
      // for (let i = 0; i < this.children.length; i++) {
      //   // check if recursing through contains method with next node returns true
      //   if (this.children[i].contains(value)) {
      //     return true;
      //   }
    }
    return false;
    // return false if not found at all
  }

  // working - applies the function to each child in the tree
  traverse(fn) {
    //apply to this node
    //node I'm currently working on
    fn(this); //do it first on tree and see if tree has any children

    //apply to the children
    for (let child of this.children) {
      child.traverse(fn); //applies to all children - recursive call here
      // fn(child);//only works if all the children are leaf nodes
    }
    //base case happens automatically because there is a limit
  }

  // OPTIONAL
  // working - return the node with that value if found. Returns null otherwise
  find(value) {
    if (this.value === value) {
      //see if the root has the value
      return this;
    } else {
      for (let child of this.children) {
        //iterate over the children and check recursively
        let node = child.find(value); //check every child - this is the recursive call
        if (node) {
          return node;
        }
      }
    }
    return null;
    //OR
    // let found = this;
    // if (found.value == value) {
    //   return found;
    // }
    // for (let i = 0; i < this.children.length; i++) {
    //   found = this.children[i].find(value);
    //   if (found) {
    //     return found;
    //   }
    // }
    // return null;
  }

  // OPTIONAL
  // not completely working!
  // adds a node with "value" as a child of the node with refValue - use the addChild method!!!!
  // -> returns the new node added
  // or null if refValue was not found
  // insertChildUnder(refValue, value) {
  //   let refNode = this.find(refValue);
  //   //if refNode found, return it
  //   //addChild() must return newly added child
  //   if (refNode) {
  //     //changed the 2 lines below but not fixed it
  //     return refNode.addChild(value); //recursively call the addChild method
  //     // return upDated;
  //   } else {
  //     return null;
  //   }
  // }
  insertChildUnder(refValue, value) {
    let refNode = this.find(refValue);
    if (refNode) {
      return refNode.addChild(value);
    } else {
      return null;
    }
  }

  // OPTIONAL

  //adds a node with "value" between refValue and childValue (which has to be a child of refValu)
  //returns the new node added
  insertBetween(refValue, childValue, value) {
    // Find refNode (else return null)
    let refNode = this.find(refValue);
    if (!refNode) {
      return null;
    }
    // Find childNode index (else return null)
    let childNodeIx = refNode.children.findIndex(c => c.value === childValue);
    //got through the children and find the one that matches childValue from params
    if (childNodeIx === -1) {
      //if it doesn't match - array will be empty and have -1 index
      return null;
    }
    // Create new node
    let newNode = new Tree(value);
    // In refNode, replace childNode with newNode
    let childNode = refNode.children[childNodeIx]; //I'm unclear on what [] is doing here
    refNode.children[childNodeIx] = newNode;
    // Add childNode to newNode
    return newNode.children.push(childNode);
  }
}

module.exports = Tree;
