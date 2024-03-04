import Queue from "./Queue";

export default function bfs(head: BinaryNode<number>, needle: number): boolean {
  let q = new Queue<BinaryNode<number>>();
  q.enqueue(head);

  while(!q.isEmpty()) {
    let cur = q.deque();
    if (cur?.value === needle) {
      return true;
    }
    if (cur?.left) {
      q.enqueue(cur.left);
    }
    if (cur?.right) {
      q.enqueue(cur.right);
    }
  }

  return false;
}