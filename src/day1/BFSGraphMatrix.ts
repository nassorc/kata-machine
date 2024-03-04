import Queue from "./Queue";

export default function bfs(
  graph: WeightedAdjacencyMatrix, 
  source: number, 
  needle: number
): number[] | null 
{
  let seen = new Array(graph.length).fill(false);
  let path = new Array(graph.length).fill(-1)
  let q = new Queue<number>();

  q.enqueue(source);
  seen[source] = true;

  while(!q.isEmpty()) {
    let cur = q.deque() as number;
    if(cur === needle) { break; }

    let neighbors = graph[cur];  // get cur (idx) edges

    // idx represents the relationship from source to idx.
    // neighbors[idx] is the weight from srouce to idx.

    for (let idx = 0; idx < neighbors.length; ++idx) { 
      if (neighbors[idx] === 0) { continue; }
      if (seen[idx]) { continue; } // if node is visited
      
      q.enqueue(idx);  // enqueue unvisited adjacent nodes 
      seen[idx] = true;
      path[idx] = cur;
    }
  }

  let cur = needle;
  let out = [];

  while (path[cur] !== -1) {
    out.push(cur);
    cur = path[cur];
  }

  if(out.length) {
    return [source].concat(out.reverse());
  }
  return null;

}