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
        return true; //had added a step too many here
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
  //return the node with that value if found. Returns null otherwise
  find(value) {}

  // OPTIONAL
  //adds a node with "value" as a child of the node with refValue
  //returns the new node added
  //or null if refValue was not found
  insertChildUnder(refValue, value) {}

  // OPTIONAL
  //adds a node with "value" between refValue and childValue (which has to be a child of refValu)
  //returns the new node added
  insertBetween(refValue, childValue, value) {}
}

module.exports = Tree;
