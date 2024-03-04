function preorder_walk(cur: BinaryNode<number> | null, path: number[]) {
  // base case
  if (cur == null)  { return; }
  // recursive step

  // visit
  path.push(cur.value);
  // walk left
  preorder_walk(cur.left, path);
  // walk right
  preorder_walk(cur.right, path);
  return;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
  let path: number[] = [];
  preorder_walk(head, path);
  return path;
}