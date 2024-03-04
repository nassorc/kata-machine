export default class MinHeap2 {
    public length: number;
    private q: number[];

    constructor() {
        this.length = 0;
        this.q = [];
    }

    insert(item: number) {
        this.q[this.length] = item;
        this.heapifyUp(this.length);
        this.length += 1;
    } 

    delete(): number | undefined {
        if (this.length === 0) { 
            return undefined; 
        }

        let out = this.q[0];
        this.length -= 1;

        if (this.length === 0) {
            return out;
        }

        this.q[0] = this.q[this.length];
        this.heapifyDown(0);
        return out;
    } 

    private heapifyUp(idx: number) {
        if (idx === 0) {
            return;
        }

        let cVal = this.q[idx];
        let pIdx = this.getParent(idx);
        let pVal = this.q[pIdx];

        if (pVal < cVal) {
            return;
        }

        this.q[pIdx] = cVal;
        this.q[idx] = pVal;

        this.heapifyUp(pIdx);
    }

    private heapifyDown(idx: number) {
        let leftIdx = this.getLeft(idx);
        let rightIdx = this.getRight(idx);

        if (idx >= this.length || leftIdx >= this.length) {
            return;
        }

        let cVal = this.q[idx];
        let leftVal = this.q[leftIdx];
        let rightVal = this.q[rightIdx];

        if (leftVal < rightVal && leftVal < cVal) {
            this.q[leftIdx] = cVal;
            this.q[idx] = leftVal;
            this.heapifyDown(leftIdx);
            return;
        }
        // else if (rightVal < leftVal && rightVal < cVal) {
        // }
        this.q[rightIdx] = cVal;
        this.q[idx] = rightVal;
        this.heapifyDown(rightIdx);
    }

    private getParent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }
    private getLeft(idx: number): number {
        return (2 * idx) + 1;
    }
    private getRight(idx: number): number {
        return (2 * idx) + 2;
    }
}
