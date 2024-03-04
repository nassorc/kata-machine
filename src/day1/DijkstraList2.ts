import MinHeap from "./MinHeap3";

type Node = { node: number, weight: number };
type GraphEdge = { to: number; weight: number };
type WeightedAdjacencyList = GraphEdge[][];

// WeightedAdjacencyList: [[ { to: number, weight: number } ]]
export default function dijkstra_list2 (
    source: number,
    sink: number,
    graph: WeightedAdjacencyList
): number[] {
    let q = new MinHeap(
        (a: Node, b: Node) => a.weight - b.weight
    );
    let path: number[] = new Array(graph.length).fill(-1);
    let costs = new Array(graph.length).fill(Infinity);
    let seen = new Array(graph.length).fill(false);

    q.insert(createMinHeapNode(source, 0));
    costs[source] = 0;

    while (!q.isEmpty()) {
        let node = q.delete() as Node;
        let cur = node.node;
        seen[cur] = true;

        let edges = graph[cur];
        for (let i = 0; i < edges.length; ++i) {
            let edge = edges[i];
            if (seen[edge.to]) {
                continue;
            }
            // update cost
            let cost = edge.weight + costs[cur];
            if (cost < costs[edge.to]) {
                costs[edge.to] = cost;
                path[edge.to] = cur;
            }
            q.insert(createMinHeapNode(edge.to, costs[edge.to]));
        }
    }

    let out: number[] = [];
    let cur = sink;

    if (path[cur] === -1) {
        return out;
    }

    while(cur !== -1) {
        out.push(cur);
        cur = path[cur];
    }

    return out.reverse();
}

function createMinHeapNode(node: number, weight: number): Node {
    return { node, weight };
}
