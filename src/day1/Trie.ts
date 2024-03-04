type Node = {
    children: Map<string, Node>
    isWord: boolean,
}

export default class Trie {
    public root: Node | null;

    constructor() {
        this.root = null; 
        this.root = {
            children: new Map(),
            isWord: false
        };
        this.root.children.set("c", {
            children: new Map(),
            isWord: false
        });
    }

    insert(item: string): void {
        let cur = this.root;

        for (const c of item) {
            if (!cur?.children.has(c)) {
                cur?.children.set(c, this.newNode());
            }

            cur = cur?.children.get(c) as Node;
        }

        // mark item as a word 
        if(cur) {
            cur.isWord = true;
        }
    }

    find(partial: string): string[] {
        let path: string[] = [];
        let words: string[] = [];

        let node = this.root; 

        for (const c of partial) {
            node = node?.children.get(c) as Node;
            if (!node) { break; }
            path.push(c);
        }

        this.findHelper(node, 0, partial, path, words);

        return words;
    }

    // too specific, rewrite for a more general case.
    private findHelper(cur: Node | null, idx: number, partial: string, path: string[], words: string[]) {
        // base case
        if (!cur) {
            return;
        }

        if (cur.isWord) {
            words.push(path.join(""));
        }

        for (const [k, n] of cur.children) {
            path.push(k)
            this.findHelper(n, idx+1, partial, path, words);
            path.pop();
        }
    }

    delete(item: string): void {
        let cur = this.root;

        for(const c of item) {
            cur = cur?.children.get(c) as Node;
            if(cur && c === item[item.length - 1]) {
                cur.isWord = false;
            }
        }
    }

    private newNode(): Node {
        return { children: new Map(), isWord: false };
    } 
}