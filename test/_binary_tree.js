const { expect } = require("chai");
const BinaryTree = require("../src/binary_tree");

let binaryTree = null;

/*------------------
Primary test case used:

      10
    /    \
   4     14
  / \    /  \
 2   6  12   16
-------------------*/

describe("Binary Tree", () => {
  beforeEach(() => {
    binaryTree = new BinaryTree(10);
  });

  describe("The add method", () => {
    it("should add smaller nodes to the left and larger to the right", () => {
      binaryTree.add(4);
      binaryTree.add(14);
      expect(binaryTree.left.value).to.equal(4);
      expect(binaryTree.right.value).to.equal(14);
    });
    it("should recursively add nodes", () => {
      binaryTree.add(4);
      binaryTree.add(14);
      binaryTree.add(6);
      binaryTree.add(16);
      binaryTree.add(2);
      binaryTree.add(12);
      expect(binaryTree.left.value).to.equal(4);
      expect(binaryTree.left.left.value).to.equal(2);
      expect(binaryTree.left.right.value).to.equal(6);
      expect(binaryTree.right.value).to.equal(14);
      expect(binaryTree.right.left.value).to.equal(12);
      expect(binaryTree.right.right.value).to.equal(16);
    });
  });
  describe("The contains method", () => {
    it("should return true or false if a value is found", () => {
      binaryTree.add(4);
      binaryTree.add(14);
      binaryTree.add(6);
      binaryTree.add(16);
      binaryTree.add(2);
      binaryTree.add(12);
      expect(binaryTree.contains(16)).to.equal(true);
      expect(binaryTree.contains(30)).to.equal(false);
    });
  });
  describe("The traverse depth first in order method", () => {
    it("should call the fn on left nodes, center nodes, then right nodes", () => {
      let test = [];
      binaryTree.add(4);
      binaryTree.add(14);
      binaryTree.add(6);
      binaryTree.add(16);
      binaryTree.add(2);
      binaryTree.add(12);
      binaryTree.traverseDepthFirstInOrder(e => test.push(e.value));
      expect(test).to.deep.equal([2, 4, 6, 10, 12, 14, 16]);
    });
  });
  describe("The traverse breadth first method", () => {
    it("should call the fn at each level from left to right", () => {
      let test = [];
      binaryTree.add(4);
      binaryTree.add(14);
      binaryTree.add(6);
      binaryTree.add(16);
      binaryTree.add(2);
      binaryTree.add(12);
      binaryTree.traverseBreadthFirst(e => test.push(e.value));
      expect(test).to.deep.equal([10, 4, 14, 2, 6, 12, 16]);
    });
  });
  describe("The lowestCommonAncestor method", () => {
    it("should return 10 for 2 and 16", () => {
      binaryTree.add(4);
      binaryTree.add(14);
      binaryTree.add(6);
      binaryTree.add(16);
      binaryTree.add(2);
      binaryTree.add(12);
      let node = binaryTree.lowestCommonAncestor(2, 16);
      expect(node.value).to.equal(10);
    });
    it("should return 10 for 6 and 14", () => {
      binaryTree.add(4);
      binaryTree.add(14);
      binaryTree.add(6);
      binaryTree.add(16);
      binaryTree.add(2);
      binaryTree.add(12);
      let node = binaryTree.lowestCommonAncestor(6, 14);
      expect(node.value).to.equal(10);
    });
    it("should return 14 for 12 and 16", () => {
      binaryTree.add(4);
      binaryTree.add(14);
      binaryTree.add(6);
      binaryTree.add(16);
      binaryTree.add(2);
      binaryTree.add(12);
      let node = binaryTree.lowestCommonAncestor(12, 16);
      expect(node.value).to.equal(14);
    });
    it("should return 4 for 4 and 4", () => {
      binaryTree.add(4);
      binaryTree.add(14);
      binaryTree.add(6);
      binaryTree.add(16);
      binaryTree.add(2);
      binaryTree.add(12);
      let node = binaryTree.lowestCommonAncestor(4, 4);
      expect(node.value).to.equal(4);
    });
    it("should return 4 for 4 and 10", () => {
      binaryTree.add(4);
      binaryTree.add(14);
      binaryTree.add(6);
      binaryTree.add(16);
      binaryTree.add(2);
      binaryTree.add(12);
      let node = binaryTree.lowestCommonAncestor(4, 10);
      expect(node.value).to.equal(10);
    });
    it("should return null if a value is not found", () => {
      binaryTree.add(4);
      binaryTree.add(14);
      binaryTree.add(6);
      binaryTree.add(16);
      binaryTree.add(2);
      binaryTree.add(12);
      let node = binaryTree.lowestCommonAncestor(2, 3);
      expect(node).to.equal(null);
    });
  });
});
