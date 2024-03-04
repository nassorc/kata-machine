type Node<V> = {
    value: V,
    next?: Node<V>,
    prev?: Node<V>,
}

export default class LRU2<K, V> {
    private head?: Node<V>;
    public tail?: Node<V>;
    private length: number;
    private lookup: Map<K, Node<V>>;
    private reverseLookup: Map<Node<V>, K>;

    constructor(private capacity: number = 10) {
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
        this.lookup = new Map();
        this.reverseLookup = new Map();
    }

    get(k: K): V | undefined {
        if (this.length === 0) {
            return undefined;
        }

        let out = this.lookup.get(k);

        if (out === undefined) {
            return undefined;
        }

        this.detach(out);
        this.prepend(out);

        return out.value;
    }

    update(k: K, v: V) {
        let node = this.lookup.get(k);

        if (!node) {
            node = { value: v } as Node<V>;

            this.prepend(node);
            this.length += 1;

            this.evictTail();

            this.lookup.set(k, node);
            this.reverseLookup.set(node, k);

        } else {
            // detatch
            this.detach(node);
            // prepend
            this.prepend(node);
            // update nodes value
            node.value = v;
        }
    }

    private evictTail() {
        if (this.length > this.capacity) {
            let node = this.tail as Node<V>;
            this.detach(node);

            let k = this.reverseLookup.get(node) as K;
            this.lookup.delete(k);
            this.reverseLookup.delete(node);
        }
    }

    private prepend(node: Node<V>) {
        if (!this.head) {
            this.tail = this.head = node;
        }

        node.next = this.head;
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

        if (node === this.head) {
            this.head = node.next;
        }

        if (node === this.tail) {
            this.tail = node.prev
        }

        // remove node's relationship
        node.next = undefined;
        node.prev = undefined;
    }
}
