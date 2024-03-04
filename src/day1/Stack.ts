type Node<T> = {
    value: T,
    next?: Node<T>
}

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        let node = { value: item } as Node<T>;
        node.next = this.head;
        this.head = node;
        this.length += 1;
    }
    pop(): T | undefined {
        if (this.length === 0) { return; }
        this.length -= 1;
        let cur = this.head as Node<T>; 
        this.head = cur?.next;
        cur.next = undefined;
        return cur.value;
    }
    peek(): T | undefined {
        return this?.head?.value
    }
}