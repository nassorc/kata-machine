export default class RingBuffer2<T> {
    public length: number;
    private read: number;
    private write: number;
    private buffer: T[];

    constructor(private capacity: number = 64) {
        this.buffer = new Array(capacity);
        this.length = 0;
        this.read = 0;
        this.write = -1;
    }

    pop(): T | undefined {
        if (this.length === 0) {
            return undefined;
        }

        let out = this.buffer[this.read];
        this.read = (this.read + 1) % this.capacity;
        this.length -= 1;

        return out;
    }

    push(item: T) {
        this.write = (this.write + 1) % this.capacity;
        this.buffer[this.write] = item;

        // if we overwrite head, increment head by 1
        if (this.read === this.write && this.length > 0) {
            this.read = (this.read + 1) % this.capacity;
        }
        else {
            // if we didn't overwrite and push new element
            this.length += 1;
        }
    }

    get(idx: number) {
        return this.buffer[(this.read + idx) % this.capacity];
    }

    flush(): T[] {
        let out: T[] = [];

        while (this.length !== 0) {
            let val = this.pop();
            if (val) {
                out.push(val);
            }
        }

        return out;
    }
}
