export default class MinHeap {
    public length: number;
    public queue: number[];

    constructor() {
        this.length = 0;
        this.queue = [];
    }

    insert(value: number): void {
        let idx = this.length;
        this.queue[idx] = value;

        // HEAPIFY UP ///////////////////////////////////////////////////
        this.heapifyUp(idx);
        // ~HEAPIFY UP //////////////////////////////////////////////////

        this.length += 1;
    }

    heapifyUp(idx: number) {
        if (idx === 0) {
            return;
        }
        const pidx = this.getParentIdx(idx);
        const pVal = this.queue[pidx];
        const val = this.queue[idx];

        if (pVal < val) {
            return;
        }

        this.queue[pidx] = val;
        this.queue[idx] = pVal;

        this.heapifyUp(pidx);
    }

    delete(): number | undefined {
        if (this.length === 0) { 
            return undefined;
        }

        let out = this.queue[0];
        this.length -= 1;

        if (this.length === 0)  {
            return out;
        }

        let newTop = this.queue[this.length];
        this.queue[0] = newTop;

        this.heapifyDown(0);

        return out;

    }

    heapifyDown(idx: number) {

        const lIdx = this.getLeftChildIdx(idx);
        const rIdx = this.getRightChildIdx(idx);

        if (idx >= this.length || lIdx >= this.length) {
            return;
        }

        const lVal = this.queue[lIdx];
        const rVal = this.queue[rIdx];
        const cVal = this.queue[idx];


        // if lval is lesser than rval and the current value, swap current with lval
        if (lVal < rVal && lVal < cVal) {
            this.queue[lIdx] = cVal;
            this.queue[idx] = lVal;

            this.heapifyDown(lIdx);
            return;
        }

        this.queue[rIdx] = cVal;
        this.queue[idx] = rVal;

        this.heapifyDown(rIdx);
        return;
    }

    isEmpty(): boolean {
        return this.length === 0;
    }

    peek(): number {
      return this.queue[0];
    }

    getParentIdx(idx: number): number {
        return Math.floor((idx - 1)/2);
    }

    getLeftChildIdx(idx: number): number {
        return 2 * idx + 1;
    }

    getRightChildIdx(idx: number): number {
        return 2 * idx + 2;
    }
}
