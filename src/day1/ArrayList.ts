export default class ArrayList<T> {
    public length: number;
    private arr: T[];

    constructor(private capacity = 64) {
        this.length = 0;
        this.arr = new Array(this.capacity);
    }

    prepend(item: T): void {
        this.shiftRight(1);
        this.arr[0] = item;
    }

    insertAt(item: T, idx: number): void {
        this.shiftRight(idx);
        this.arr[idx] = item;
    }

    append(item: T): void {
        if (this.length >= this.capacity) {
            this.growList();
        }
        this.arr[this.length] = item;
        this.length += 1;
    }

    remove(item: T): T | undefined {
        let idx = -1;
        let value: T | undefined;

        for (let i = 0; i < this.length; ++i) {
            if (this.arr[i] === item) {
                idx = i;
                value = this.arr[i];
                break;
            }
        }
        if (idx === -1) {
            return undefined;
        }
        this.shiftLeft(idx);
        return value;
    }

    get(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) { return undefined; }
        return this.arr[idx];
    }

    removeAt(idx: number): T | undefined {
        let out = this.arr[idx];
        this.shiftLeft(idx);
        return out;
    }

    private shiftRight(at: number) {
        this.length += 1;
        if (this.length > this.capacity) {
            this.growList();
        }

        for (let i = this.length - 1; i >= at; --i) {
            this.arr[i] = this.arr[i-1];
        }
    }

    private shiftLeft(at: number) {
        for (let i = at; i < this.length; ++i) {
            this.arr[i] = this.arr[i+1];
        }
        this.length -= 1;
    }

    private growList() {
        this.capacity *= 2;
        let newArr = new Array(this.capacity); 

        for (let i = 0; i < this.length; ++i) {
            newArr[i] = this.arr[i];
        }
        this.arr = newArr;
    }
}
