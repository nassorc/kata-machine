export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    // base cases
    return find(head, needle);
}

function find(cur: BinaryNode<number> | null, needle: number): boolean {
    // base cases
    if (!cur) {
        return false;
    }

    if (cur.value === needle) {
        return true;
    }

    if (needle > cur.value) {
        return find(cur.right, needle);
    }
    return find(cur.left, needle);
}
