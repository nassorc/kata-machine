function postorder_walk(cur: BinaryNode<number> | null, path: number[]) {
  // base case
  if (cur == null)  { return; }
  // recursive step

  // walk left
  postorder_walk(cur.left, path);
  // walk right
  postorder_walk(cur.right, path);
  // visit
  path.push(cur.value);
  return;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
  let path: number[] = [];
  postorder_walk(head, path);
  return path;
}