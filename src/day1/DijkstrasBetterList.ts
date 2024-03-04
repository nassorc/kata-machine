import MinHeap from "./MinHeap";

type GraphEdge = { to: number; weight: number };
type WeightedAdjacencyList = GraphEdge[][];

const min = new MinHeap(); 

// Dijkstra's: find the QUICKEST path from start to end.
// track costs: total distances from start to a given node. Goal is to find the minimized total distance.
// track prev: prev will determine what path to take or the path that minimizes the total length.

// steps
// 1. start: set start as the current node; subsequent: get cheapest unvisited node
// 2. check all nodes adjacent to the current node and update the cost table 

export function hasUnvisited(seen: boolean[]): boolean {
  return seen.some(v => v === false);
}

export function getCheapestNode(seen: boolean[], costs: number[]): number {
  let idx = 0;
  let minCost = Infinity;
  for (let i = 0; i < costs.length; ++i) {
    if (seen[i]) { continue; }
    if (minCost > costs[i]) {
      minCost = costs[i];
      idx = i;
    }
  }

  return idx;
}

export function dij(graph: WeightedAdjacencyList, start: number, end: number): number[] {
  let costs = new Array(graph.length).fill(Infinity);
  let prev = new Array(graph.length).fill(-1);
  let seen = new Array(graph.length).fill(false);
  costs[start] = 0;

  let nodeQueue = new MinHeap();
  nodeQueue.insert(start);

  while(!nodeQueue.isEmpty()) {
    // let cur = getCheapestNode(seen, costs);
    let cur = nodeQueue.delete() as number;

    // console.log("cur", cur);
    seen[cur] = true;
    let neighbors = graph[cur];
    // console.log(">", cur, neigbors);

    // visit all unvisted adjacent nodes
    for (let i = 0; i < neighbors.length; ++i) {
      let neighbor = neighbors[i];
      if (seen[neighbor.to]) { continue; }

      nodeQueue.insert(neighbor.to);

      let cost = neighbor.weight + costs[cur];
      // update with cheapest cost
      if (costs[neighbor.to] > cost) {
        costs[neighbor.to] = cost;
        prev[neighbor.to] = cur;
      }
    }
  } 

  let cur = end;
  let out = [];

  while(cur != -1) {
    out.push(cur);
    cur = prev[cur]; // node that got us the cheapest cost
  }

  return out.reverse();
}


// function report({nodeA, nodeB, seen, prev, costs}, ) {

// }
