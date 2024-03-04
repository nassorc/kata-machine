import Queue from "./Queue";

// WiehgtedAdjacencyMatrix = number[][]
export default function bfs2(
  graph: WeightedAdjacencyMatrix, 
  source: number, 
  needle: number
): number[] | null  
{
    let q = new Queue<number>();
    let prevs: number[] = new Array(graph.length).fill(-1);
    let seen: boolean[] = new Array(graph.length).fill(false);

    q.enqueue(source);

    while (!q.isEmpty()) {
        let cur = q.deque() as number;
        seen[cur] = true;

        if (cur === needle) {
            break;
        }

        let edges = graph[cur];

        for(let i = 0; i < edges.length; ++i) {
            let edge = edges[i];
            if (edge !== 0 && !seen[i]) {
                prevs[i] = cur;
                q.enqueue(i);
            }
        }
    }

    if (prevs[needle] === -1) {
        return null;
    }

    let out = [];
    let cur = needle;

    while (cur !== -1) {
        out.push(cur);
        cur = prevs[cur];
    }

    return out.reverse();
}
