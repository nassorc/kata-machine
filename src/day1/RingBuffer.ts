
export default class RingBuffer<T> {
    private buffer: (T | null)[];
    private size: number;
    private readIdx: number;
    private writeIdx: number;

    constructor(size: number) {
        this.size = size;
        this.buffer = new Array(this.size);

        this.readIdx = 0;
        this.writeIdx = -1;
    }

    push(n: T) {
        let prev = this.writeIdx;
        this.writeIdx = (this.writeIdx + 1) % this.size;
        this.buffer[this.writeIdx] = n;

        if (this.readIdx === this.writeIdx && prev !== -1) {
            this.readIdx = (this.readIdx + 1) % this.size;
        }
    }

    get(idx: number): T | undefined {
        if (idx < 0 && idx >= this.size) {
            throw new Error("out of bound");
        }
        let actualIdx = (this.readIdx + idx) % this.size;
        let out = this.buffer[actualIdx];

        console.log(`converting ${idx} to ${actualIdx}`);

        return out ? out : undefined;
    }

    pop(): T | undefined {
        let out = this.buffer[this.readIdx];
        this.readIdx = (this.readIdx + 1) % this.size;
        return out ? out : undefined;
    }

    // get(idx: number): T | undefined {
    //     let tIdx = new Index(this.size, this.front.get() + idx);
    //     return this.buffer[tIdx.get()]?.value;
    // }
    //
    // emit(): T[] {
    //     const out: T[] = [];
    //
    //     let front = this.front.get();
    //     let back = this.back.get();
    //
    //     while (front !== back || back === -1) {
    //         let data = this.buffer[front];
    //         if (data && data.value) {
    //             this.buffer[front] = null;
    //             out.push(data.value);
    //         }
    //         front = this.front.next();
    //     }
    //
    //     if (front === back) {
    //         let data = this.buffer[front];
    //         if (data && data.value) {
    //             this.buffer[front] = null;
    //             out.push(data.value);
    //         }
    //         this.front.next();
    //     }
    //
    //     return out;
    // }
}
