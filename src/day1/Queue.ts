type Node<T> = {
    value: T,
    next?: Node<T>
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    enqueue(item: T): void {
        let node = { value: item } as Node<T>;

        if (this.length === 0) {
            this.tail = this.head = node;
        } 

        else if (this.tail) {
            this.tail.next = node;
            this.tail = node;
        }

        this.length += 1;
    }

    deque(): T | undefined {
        if (this.length === 0) { 
            return undefined 
        }
        let pop = this.head;
        this.head = pop?.next;
        this.length -= 1;

        if (this.length === 0) {
            this.tail = undefined;
        }

        return pop?.value;
    }

    peek(): T | undefined {
        return this?.head?.value;
    }

    isEmpty(): boolean {
        return this.length === 0;
    }
}