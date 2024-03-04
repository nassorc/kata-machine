export default function dfs(
  graph: WeightedAdjacencyList, 
  source: number, 
  needle: number
): number[] | null 
{
  let path: number[] = [];
  let seen: boolean[] = new Array(graph.length).fill(false);

  walk(graph, source, needle, path, seen);

  return path.length ? path : null;
}

function walk (
  graph: WeightedAdjacencyList, 
  cur: number,
  target: number,
  path: number[],
  seen: boolean[]
): boolean 
{

  // base case
  if (seen[cur]) {
    return false;
  }

  if (cur === target) {
    path.push(cur);
    return true;
  }

  // pre
  path.push(cur);
  seen[cur] = true;
  // recursion
  for (let neigh of graph[cur]) {
    if (walk(graph, neigh.to, target, path, seen)) {
      return true;
    }
  }

  // post
  path.pop();
  return false;
}
