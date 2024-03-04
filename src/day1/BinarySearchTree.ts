export default class BST<T> {
  public root: BinaryNode<T> | null;
  public length: number;
  public height: number;

  constructor() {
    this.root = null;
    this.length = 0;
    this.height = 0;
  }

  contains(item: T): boolean {
    return this.cotnainsNode(this.root, item);
  }

  private cotnainsNode(cur: BinaryNode<T> | null, item: T): boolean {
    // base case
    if (!cur) {
      return false
    }
    if (cur.value === item) {
      return true
    }

    // recursive step 
    if (item <= cur.value) {
      return this.cotnainsNode(cur.left, item);
    }
    return this.cotnainsNode(cur.right, item);
  }

  insert(item: T) {
    this.length += 1;
    this.insertNode(this.root, null, item);
  }

  private insertNode(cur: BinaryNode<T> | null, parent: BinaryNode<T> | null, item: T) {
    if(!cur && !parent) {
      this.root = this.createNode(item);
      return;
    }

    if (!cur) { return; }

    if (item <= cur.value) {
      if (!cur.left) {
        cur.left = this.createNode(item);
        return;
      }
      else {
        this.insertNode(cur.left, cur, item);
        return;
      }
    }

    if (cur.right === null) {
      cur.right = this.createNode(item);
      return;
    }
    else {
      this.insertNode(cur.right, cur, item);
      return;
    }
  }

  delete(item: T) {
    let deleted = this.deleteNode(this.root, item);
    if (deleted) { this.length -= 1; }
    this.root = deleted;
  }

  private deleteNode(cur: BinaryNode<T> | null, item: T): BinaryNode<T> | null {
    // base case
    if (!cur) { return null; }

    // recurse

    // traverse tree
    if (item < cur.value) { 
      let deletedVal = this.deleteNode(cur.left, item);  // traverse left
      cur.left = deletedVal;
      return cur;
    }
    else if (item > cur.value) { 
      let deletedVal = this.deleteNode(cur.right, item);
      cur.right = deletedVal;
      return cur;
    }
    else {
      // post: we've reached this point if item is cur.value
      // case 1: no children
      if (!cur.left && !cur.right) {
        cur = null;
        return cur;
      }

      // case 2: one child
      if(!cur.right) { 
        // has left child
        let lSubtree = cur.left;
        cur = null;
        return lSubtree;
      }
      else if(!cur.left) { 
        // has right child
        let rSubtree = cur.right;
        cur = null;
        return rSubtree;
      }

      // case 3: two children
      // we have the target, now find the largest node on the left subtree
      // by traversing the right nodes
      let largest: BinaryNode<T> | null = cur.left; 
      while(largest.right != null) {
        largest = largest.right;
      }
      let deletedLargest = this.deleteNode(cur.left, largest.value);
      cur.left = deletedLargest;
      cur.value = largest.value;
      // we have the largest at this point
    }

    return cur;
  }

  walk(node: BinaryNode<T> | null, path: T[]) {
    // inorder
    if (!node) {
      return;
    }
    this.walk(node.left, path);
    path.push(node.value);
    this.walk(node.right, path);
  }

  print() {
    let path: T[] = [];
    this.walk(this.root, path);
    console.log(path);
  }

  createNode(item: T): BinaryNode<T> {
    return { value: item, left: null, right: null };
  }
}