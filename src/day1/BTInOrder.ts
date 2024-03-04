function inorder_walk(cur: BinaryNode<number> | null, path: number[]) {
  // base case
  if (cur == null)  { return; }
  // recursive step

  // walk left
  inorder_walk(cur.left, path);
  // visit
  path.push(cur.value);
  // walk right
  inorder_walk(cur.right, path);
  return;
}

export default function in_order_search(head: BinaryNode<number>): number[] {
  let path: number[] = [];
  inorder_walk(head, path);
  return path;
}