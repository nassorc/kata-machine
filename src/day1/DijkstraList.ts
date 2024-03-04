type GraphEdge = { to: number; weight: number };
type WeightedAdjacencyList = GraphEdge[][];

function hasUnvisited(seen: boolean[]): boolean {
    return seen.filter(elm => !elm).length > 0;
}

// returns the node with the cheap cost
function findCheapestNode(seen: boolean[], costs: number[]): number {
    let minValue = Infinity;
    let idx = 0;

    for (let i=0; i < costs.length; ++i) {
        if (seen[i]) { continue; }
        if (minValue > costs[i]) {
            minValue = costs[i];
            idx = i;
        }
    }

    return idx;
}

export default function dijkstra_list(
    source: number,
    sink: number,
    graph: WeightedAdjacencyList
): number[] {

    let costs: number[] = new Array(graph.length).fill(Infinity);
    let parent: number[] = new Array(graph.length).fill(-1);
    let seen: boolean[] = new Array(graph.length).fill(false);

    seen[source] = true;
    costs[source] = 0;

    while (hasUnvisited(seen)) {
        let cur = findCheapestNode(seen, costs);
        seen[cur] = true;
        let neighbors = graph[cur];

        for (let i=0; i < neighbors.length; ++i) {
            let neighbor = neighbors[i];

            if (seen[neighbor.to]) {
                continue;
            }

            const updateCost = neighbor.weight + costs[cur];

            if (costs[neighbor.to] > updateCost) {
                costs[neighbor.to] = updateCost;
                parent[neighbor.to] = cur;
            }
        }
    }

    // console.log(parent)

    let out: number[] = new Array(100);
    let cur = sink;

    while (cur != -1) {
        out.push(cur);
        cur = parent[cur];
    }

    return out.reverse();
}
