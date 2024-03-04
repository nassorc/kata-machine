type Node<T> = {
    value: T,
    next?: Node<T>
}
export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    prepend(item: T): void {
        // case 1: node elements in the list
        // case 2: node contains two or more elements
        let node = this.createNode(item);

        this.length += 1;

        if (!this.tail) {
            this.tail = this.head = node;
        } else {
            // set node.next to head
            node.next = this.head;
            // update head
            this.head = node;
        }

    }

    append(item: T): void {
        // case 1: node elements in the list
        // case 2: node contains two or more elements
        let node = this.createNode(item);

        this.length += 1;

        if (!this.tail) {
            this.tail = this.head = node;
        } else {
            // set tail.next to new node
            this.tail.next = node;
            // update tail
            this.tail = node;
        }
    }

    insertAt(item: T, idx: number): void {
        if (idx >= this.length) { throw new Error("Out of bounds"); }

        // insert at head
        if (idx === 0) {
            this.prepend(item);
            return;
        }
        // insert at tail
        if (idx === this.length - 1) {
            this.append(item);
            return;
        }

        let prev = this.walk(idx - 1) as Node<T>;
        let cur = prev?.next as Node<T>;

        let node = this.createNode(item);

        node.next = cur;
        prev.next = node;
    }

    remove(item: T): T | undefined {
        if (this.length === 0) { return; }
        if (this.length === 1) { 
            if (this.head?.value === item) {
                this.head = this.tail = undefined;
                this.length -= 1;
                return item;
            }
        } 

        let cur = this.head as Node<T>;
        let prev = this.head as Node<T>;
        let i = 0;

        while(i < this.length) {
            // case: target at head
            if (cur?.value === item && i == 0) {
                this.head = cur.next;
                cur.next = undefined;
                this.length -= 1;
                return cur.value;
            }
            // case: target at tail
            else if (cur?.value === item && i == this.length - 1) {
                this.tail = prev;
                prev.next = undefined;
                this.length -= 1;
                return cur.value;
            }
            else if (cur?.value === item) {
                prev.next = cur.next;
                cur.next = undefined;
                this.length -= 1;
                return cur.value;
            }

            prev = cur;
            cur = cur?.next as Node<T>;
            i += 1;
        }

        return
    }

    removeAt(idx: number): T | undefined {
        if (this.length === 0 ||  idx >= this.length) { return; }
        if (this.length === 1 && idx == 1) { 
            this.length -= 1;
            return this.head?.value;
        } 

        let i = 0;
        let cur = this.head as Node<T>;
        let prev = this.head as Node<T>;

        while(i != idx) {
            prev = cur;
            cur = cur?.next as Node<T>;
            i += 1;
        }

        let rValue;

        if (i == 0) {
            this.head = cur.next;
            cur.next = undefined;
            this.length -= 1;
            rValue = cur.value;
        }

        else if (i == this.length - 1) {
            this.tail = prev;
            prev.next = undefined;
            this.length -= 1;
            rValue = cur.value;
        }

        else {
            prev.next = cur.next;
            cur.next = undefined;
            this.length -= 1;
            rValue = cur.value;
        }

        return rValue;
    }

    get(idx: number): T | undefined {
        return this.walk(idx)?.value;
    }

    isEmpty() {
        return this.length === 0;
    }

    private createNode<T>(item: T): Node<T> {
        return { value: item };
    }

    private walk(idx: number): Node<T> | undefined {
        if (idx >= this.length) { return; }

        let cur = this.head as Node<T>;
        let i = 0;

        while (i < idx) {
            cur = cur?.next as Node<T>;
            i += 1;
        }

        return cur;
    }
}