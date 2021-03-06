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
    }
    //iterate over the children and check recursively
    for (let child of this.children) {
      let node = child.find(value); //check every child - this is the recursive call
      if (node) {
        return node;
      }
    }
    return null;
  }

  // OPTIONAL
  // not completely working!
  // adds a node with "value" as a child of the node with refValue - use the addChild method!!!!
  // -> returns the new node added
  // or null if refValue was not found
  insertChildUnder(refValue, value) {
    let refNode = this.find(refValue);
    //if refNode found, return it
    //addChild() must return newly added child
    if (refNode) {
      //changed the 2 lines below but not fixed it
      let upDated = refNode.addChild(value); //recursively call the addChild method
      return upDated;
    } else {
      return null;
    }
  }

  // OPTIONAL
  // not all working
  //adds a node with "value" between refValue and childValue (which has to be a child of refValu)
  //returns the new node added
  insertBetween(refValue, childValue, value) {
    //find refNode or return null
    let refNode = this.find(refValue); //calling the find method on this with refValue as the param
    if (!refNode) {
      //if it doesn't exist
      return null; //do this
    }
    //find childNode/return null
    let childNode = refNode.find(childValue); //calling the find method on this with childValue as the param
    if (!childNode) {
      //if it doesn't exist
      return null; //do this
    }
    //remove childNode from refNode.children - why?
    refNode.children = refNode.children.filter(
      n => n.value !== childNode.value
    );

    //add newNode to refNode.children
    let newNode = refNode.addChild(value);

    //add childNOde to newNode.children
    newNode.children.push(childNode); // explain this!!!

    return newNode; // what is this?
  }
}

module.exports = Tree;
