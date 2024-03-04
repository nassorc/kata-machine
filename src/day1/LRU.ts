type Node<T> = {
    value: T,
    next: Node<T> | null,
    prev: Node<T> | null,
}

export default class LRU<K, V> {
    private length: number;
    private head?: Node<V>;
    private tail?: Node<V>;
    private lookup: Map<K, Node<V>>;
    private reverseLookup: Map<Node<V>, K>;

    constructor(private capacity: number = 10) {
        this.length = 0;
        this.tail = this.head = undefined;
        this.lookup = new Map();
        this.reverseLookup = new Map();
    }

    update(key: K, value: V): void {
        // update or set the value
        // if does not exists
        //     check capacity, evict
        // else update value
        // dettach the node
        // preprend
        
        let node = this.lookup.get(key);
        if (!node) {
            node = this.createNode(value);
            this.length += 1;
            this.prepend(node);
            this.trimCache();

            this.lookup.set(key, node);
            this.reverseLookup.set(node, key);
        } else {  // node exists
            this.detach(node);
            this.prepend(node);
            node.value = value;
            // update nodes value
            // detach node
            // prepend
        }

    }

    get(key: K): V | undefined {
        // get value from lookup
        // if no value return undefined
        // else detach node, and preprend to list
        let node = this.lookup.get(key);
        if (!node) {
            return undefined;
        }

        this.detach(node);
        this.prepend(node);

        return node.value;
    }

    private createNode(value: V): Node<V> {
        return { value, next: null, prev: null }
    }

    private prepend(node: Node<V>) {
        if (!this.head) {
            this.tail = this.head = node;
            return;
        }

        node.next = this.head as Node<V>;
        this.head.prev = node;
        this.head = node;
    }

    private detach(node: Node<V>) {
        if (node.prev) {
            node.prev.next = node.next;
        }

        if (node.next) {
            node.next.prev = node.prev;
        }

        // if (this.length === 1) {
        //     this.tail = this.head = undefined;
        // }
        // cases below handles the code above.

        if (node === this.tail) {
            this.tail = node.prev as Node<V>;
        }

        if (node === this.head) {
            this.head = node.next as Node<V>;
        }

        // break link from node
        node.next = null;
        node.prev = null;
    }

    private trimCache() {
        if (this.length <= this.capacity) {
            return;
        }

        let tail = this.tail as Node<V>;
        this.detach(tail as Node<V>);

        // update lookup
        let key = this.reverseLookup.get(tail) as K;
        this.lookup.delete(key);
        this.reverseLookup.delete(tail);

    }
}
