type Node<T> = {
    value: T,
    next?: Node<T>,
    prev?: Node<T>,
}

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    prepend(item: T): void {
        let node = this.createNode(item);
        if (!this.head) {
            this.tail = this.head = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.length += 1;
    }

    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length) { throw new Error("index out of bounds"); }

        if (idx === this.length) {
            this.append(item);
            return;
        } else if (idx === 0) {
            this.prepend(item);
            return
        } 

        this.length += 1;

        let cur = this.head as Node<T>;
        let node = this.createNode(item);

        for (let i = 0; i < idx; ++i) {
            cur = cur.next as Node<T>;
        }

        let prev = cur.prev as Node<T>;

        node.prev = prev;
        prev.next = node;

        node.next = cur;
        cur.prev = node;
    }

    append(item: T): void {
        let node = this.createNode(item);
        if (!this.head) {
            this.tail = this.head = node;
        } 
        else if (this.tail) {
            node.prev = this.tail as Node<T>;
            this.tail.next = node;
            this.tail = node;
        }
        this.length += 1;

    }

    remove(item: T): T | undefined {
        let cur = this.head as Node<T>;
        if (!cur) { return undefined; }

        let deleted = undefined;

        for (let i = 0; i < this.length; ++i) {
            if (cur.value === item) {
                this.length -= 1;
                if (cur === this.head && this.length === 1) {
                    deleted = cur.value;
                    this.tail = this.head = undefined;
                    break;
                }
                if (cur === this.head) {
                    deleted = cur.value;
                    if (cur.next && cur.next.prev) {
                        cur.next.prev = undefined;
                        cur.prev = cur.next = undefined;
                    }
                    this.head = cur.next;
                    break;
                }
                if (cur === this.tail) {
                    deleted = cur.value;
                    if (cur.prev && cur.prev.next) {
                        cur.prev.next = undefined;
                        cur.next = cur.prev = undefined;
                    }
                    this.tail = cur.prev;
                    break;
                }
                // @ts-ignore
                cur.prev.next = cur.next as Node<T>;
                cur.prev = undefined;

                // @ts-ignore
                cur.next.prev = cur.prev;
                cur.next = undefined;
                deleted = cur.value;
                break;
            }
            cur = cur.next as Node<T>;
        }

        return deleted;
    }

    get(idx: number): T | undefined {
        let cur = this.head;


        for (let i = 0; i < this.length; i++) {
            if (i === idx || !cur) { break; }
            cur = cur.next;
        }

        return cur?.value;
    }

    removeAt(idx: number): T | undefined {
        let cur = this.head as Node<T>;

        if (cur === undefined) { return; }
        
        for (let i = 0; i < this.length; ++i) {
            if (idx === i){
                break;
            }
            cur = cur.next as Node<T>;
        }

        this.length -= 1;

        if (cur === this.head && this.length === 1) {
            this.tail = this.head = undefined;
            return cur.value;
        }

        if (cur === this.head) {
            if (cur.next && cur.next.prev) {
                cur.next.prev = undefined;
                cur.prev = cur.next = undefined;
            }
            this.head = cur.next;
            return cur.value;
        }

        if (cur === this.tail) {
            if (cur.prev && cur.prev.next) {
                cur.prev.next = undefined;
                cur.next = cur.prev = undefined;
            }
            this.tail = cur.prev;
            return cur.value;
        }

        // @ts-ignore
        cur.prev.next = cur.next as Node<T>;
        cur.prev = undefined;

        // @ts-ignore
        cur.next.prev = cur.prev;
        cur.next = undefined;

        
        return cur.value;
    }

    private createNode(item: T): Node<T> {
        return { value: item, next: undefined, prev: undefined };
    }
}
