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

  // adds a child into the tree
  addChild(value) {
    let newNode = new Tree(value);
    this.children.push(newNode);
  }

  //  returns true/false if the value is in the tree

  contains(value) {
    if (this.value === value) {
      return true;
    }
    for (let child of this.children) {
      if (child.contains(value)) {
        return true;
      }
    }
    return false;
  }

  //  applies the function to each child in the tree
  traverse(fn) {
    fn(this);
    for (let child of this.children) {
      child.traverse(fn);
    }
  }

  // OPTIONAL
  // return the node with that value if found. Returns null otherwise
  find(value) {
    if (this.value === value) {
      return this;
    } else {
      for (let child of this.children) {
        let node = child.find(value);
        if (node) {
          return node;
        }
      }
    }
    return null;
  }

  // OPTIONAL
  // adds a node with "value" as a child of the node with refValue - use the addChild method!!!!
  // returns the new node added
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
    let refNode = this.find(refValue);
    if (!refNode) {
      return null;
    }
    let childNodeIx = refNode.children.findIndex(c => c.value === childValue);
    if (childNodeIx === -1) {
      return null;
    }
    let newNode = new Tree(value);
    let childNode = refNode.children[childNodeIx];
    refNode.children[childNodeIx] = newNode;
    newNode.children.push(childNode);
    return newNode;
  }
}

module.exports = Tree;
