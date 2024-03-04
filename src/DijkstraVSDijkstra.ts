import MinHeap from "./day1/MinHeap";
import d from "./day1/DijkstraList";
import { dij as d2 } from "./day1/DijkstrasBetterList";
import d3 from "./day1/DijkstraList2";
import { list1, simpleList1, largerList } from "./__tests__/graph";

class SGraph {
  public graph: {to:number, weight: number}[][];
  constructor() {
    this.graph = [];
  }
  insert(node: number, to: number, weight: number) {
    let toNode = { to, weight };
    let newNode = { to: node , weight };

    if(this.graph[node] === undefined || this.graph[node].length === 0) {
      this.graph[node] = [toNode];
    } else {
      this.graph[node].push(toNode);
    }

    if(this.graph[to] === undefined || this.graph[to].length === 0) {
      this.graph[to] = [newNode];
    } else {
      this.graph[to].push(newNode);
    }
  }
  has(node: number, target: number): boolean {
    return this.graph[node]?.find(n => n.to === target) !== undefined;
  }
}

let graph = new SGraph();

for (let i = 0; i < 1000; ++i) {

  for (let j = 0; j < 10; j++) {
    let w = Math.floor(Math.random() * 100);
    let e = Math.floor(Math.random() * 1000);
    while(e === i || graph.has(i, e)) {
      e = Math.floor(Math.random() * 1000);
    } 
    graph.insert(i, e, w);
  }
}


let s2 = performance.now();
d3(0, 5, largerList)
let e2 = performance.now();
console.log(`d3: ${e2 - s2}`);

let s0 = performance.now();
d(0, 5, largerList)
let e0 = performance.now();
console.log(`d: ${e0 - s0}`);

let s1 = performance.now();
d2(largerList, 0, 5)
let e1 = performance.now();
console.log(`d2: ${e1 - s1}`);

// console.log(d(0, 3, simpleList1));
// console.log(d(0, 6, list1));
