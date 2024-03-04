import Queue from "./Queue";

export default function BFS(head: BinaryNode<number>, needle: number): boolean {
    let q = new Queue<BinaryNode<number>>();
    q.enqueue(head);

    while(!q.isEmpty()) {
        // visit
        let node = q.deque();
        if (needle === node?.value) {
            return true;
        }
        if (node?.left) {
            q.enqueue(node.left);
        }
        if (node?.right) {
            q.enqueue(node.right);
        }
    }

    return false;

}
