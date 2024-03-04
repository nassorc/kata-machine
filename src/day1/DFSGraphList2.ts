// WeightedAdjacencyList [[{ to: number, weight: number }]]
export default function dfs2(
  graph: WeightedAdjacencyList, 
  source: number, 
  needle: number
): number[] | null 
{
    let path: number[] = []
    let seen: boolean[] = new Array(graph.length).fill(false);

    search(graph, source, needle, path, seen);

    if (path.length) {
        return path;
    }

    return null;
}

function search(
    graph: WeightedAdjacencyList,
    cur: number, 
    needle: number, 
    path: number[], 
    seen: boolean[]
): boolean {

    if (cur === needle) {
        path.push(cur);
        return true;
    }

    if (seen[cur]) {
        return false;
    }

    // pre
    path.push(cur);
    seen[cur] = true;
    // recurse
    let edges = graph[cur];
    for (let i = 0; i < edges.length; ++i) {
        if (search(graph, edges[i].to, needle, path, seen)) {
            return true;
        }
    }
    // post
    path.pop();

    return false;
}
