import BST from "@code/BinarySearchTree";
import { bst, bst2 } from "./tree";
import compare from "@code/CompareBinaryTrees";

describe("binary-search-tree", () => {
  it("should insert", () => {
    let tree = new BST<number>();
    tree.insert(20);
    tree.insert(10);
    tree.insert(5);
    tree.insert(15);
    tree.insert(11);
    tree.insert(100);
    tree.insert(35);
    tree.insert(101);

    expect(tree.length).toBe(8);
    expect(tree.root).toEqual(bst);
    expect(compare(tree.root, bst)).toEqual(true);
    expect(compare(tree.root, bst2)).toEqual(false);

    expect(tree.contains(102)).toEqual(false);
    expect(tree.contains(100)).toEqual(true);
    expect(tree.contains(20)).toEqual(true);
    expect(tree.contains(5)).toEqual(true);
    expect(tree.contains(1)).toEqual(false);
  });

  describe("delete node", () => {
    test("no children", () => {
      let tree = new BST<number>();
      tree.insert(10);
      tree.insert(5);
      tree.insert(2);
      tree.insert(15);
      tree.insert(11);


      expect(tree.contains(2)).toEqual(true);
      expect(tree.contains(5)).toEqual(true);
      expect(tree.contains(10)).toEqual(true);
      expect(tree.contains(15)).toEqual(true);
      expect(tree.contains(11)).toEqual(true);

      tree.delete(2)
      expect(tree.contains(2)).toEqual(false);

      tree.delete(5)
      expect(tree.contains(5)).toEqual(false);

      tree.delete(11)
      expect(tree.contains(11)).toEqual(false);

      tree.delete(15)
      expect(tree.contains(15)).toEqual(false);

      tree.delete(10)
      expect(tree.contains(10)).toEqual(false);
    });

    test("one child", () => {
      let tree = new BST<number>();
      tree.insert(10);
      tree.insert(5);
      tree.insert(3);
      tree.insert(2);
      tree.insert(15);
      tree.insert(20);

      let expectedTree = new BST<number>();
      expectedTree.insert(10);
      expectedTree.insert(3);
      expectedTree.insert(2);
      expectedTree.insert(20);


      // console.dir(tree, { depth: Infinity });
      expect(compare(tree.root, expectedTree.root)).toEqual(false);

      expect(tree.contains(5)).toEqual(true);
      tree.delete(5);
      expect(tree.contains(5)).toEqual(false);

      expect(tree.contains(15)).toEqual(true);
      tree.delete(15);
      expect(tree.contains(15)).toEqual(false);

      expect(compare(tree.root, expectedTree.root)).toEqual(true);
    });

    test("two children", () => {
      let tree = new BST<number>();
      tree.insert(10);
      tree.insert(5);
      tree.insert(2);
      tree.insert(4);
      tree.insert(8);

      let expectedTree: BinaryNode<number> = {
        value: 10,
        left: {
          value: 4,
          left: {
            value: 2,
            left: null,
            right: null
          },
          right: {
            value: 8,
            left: null,
            right: null
          }
        },
        right: null
      }

      expect(compare(tree.root, expectedTree)).toEqual(false);
      tree.delete(5);
      expect(compare(tree.root, expectedTree)).toEqual(true);

      let tree2 = new BST<number>();
      tree2.insert(20);
      tree2.insert(15);
      tree2.insert(18);
      tree2.insert(8);
      tree2.insert(2);
      tree2.insert(10);
      tree2.insert(12);
      tree2.insert(11);

      let expectedTree2: BinaryNode<number> = {
        value: 20,

        left: {
          value: 12,
          left: {
            value: 8,
            left: {
              value: 2,
              left: null,
              right: null,
            },
            right: {
              value: 10,
              left: null,
              right: {
                value: 11,
                left: null,
                right: null,
              }
            }
          },
          right: {
            value: 18,
            left: null,
            right: null,
          }
        },

        right: null
      }

      expect(compare(tree2.root, expectedTree2)).toEqual(false);
      tree2.delete(15);
      expect(compare(tree2.root, expectedTree2)).toEqual(true);
    });

    test("print", () => {
      let tree2 = new BST<number>();
      tree2.insert(20);
      tree2.insert(15);
      tree2.insert(18);
      tree2.insert(8);
      tree2.insert(2);
      tree2.insert(10);
      tree2.insert(12);
      tree2.insert(11);
      tree2.print();

    });

  });

});