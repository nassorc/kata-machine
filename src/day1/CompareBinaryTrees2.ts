export default function compare2(
    treeA: BinaryNode<number> | null, 
    treeB: BinaryNode<number> | null
): boolean {

    // base
    if (!treeA && !treeB) {
        return true;
    }

    if (!treeA || !treeB) {
        return  false;
    }

    if (treeA.value !== treeB.value) {
        return false;
    }

    // recurse
    return compare2(treeA.left, treeB.left) && compare2(treeA.right, treeB.right);

}
