//      
//      / -- (1) -- \
//     1      |      10
//    /       |       \
// (0)        4        (3)
//    \       |       /
//     7      |      1
//      \ -- (2) -- /

type GraphEdge = { to: number; weight: number };
type WeightedAdjacencyList = GraphEdge[][];
type WeightedAdjacencyMatrix = number[][];

export const simpleList1: WeightedAdjacencyList = [];
simpleList1[0] = [
    { to: 1, weight: 1 },
    { to: 2, weight: 7 },
];
simpleList1[1] = [
    { to: 0, weight: 1 },
    { to: 2, weight: 4 },
    { to: 3, weight: 10 },
];
simpleList1[2] = [
    { to: 0, weight: 7 },
    { to: 1, weight: 4 },
    { to: 3, weight: 1 },
];
simpleList1[3] = [
    { to: 1, weight: 5 },
    { to: 2, weight: 1 },
];

export const list1: WeightedAdjacencyList = [];

//      (1) --- (4) ---- (5)
//    /  |       |       /|
// (0)   | ------|------- |
//    \  |/      |        |
//      (2) --- (3) ---- (6)
list1[0] = [
    { to: 1, weight: 3 },
    { to: 2, weight: 1 },
];
list1[1] = [
    { to: 0, weight: 3 },
    { to: 2, weight: 4 },
    { to: 4, weight: 1 },
];
list1[2] = [
    { to: 1, weight: 4 },
    { to: 3, weight: 7 },
    { to: 0, weight: 1 },
];
list1[3] = [
    { to: 2, weight: 7 },
    { to: 4, weight: 5 },
    { to: 6, weight: 1 },
];
list1[4] = [
    { to: 1, weight: 1 },
    { to: 3, weight: 5 },
    { to: 5, weight: 2 },
];
list1[5] = [
    { to: 6, weight: 1 },
    { to: 4, weight: 2 },
    { to: 2, weight: 18 },
];
list1[6] = [
    { to: 3, weight: 1 },
    { to: 5, weight: 1 },
];

export const list2: WeightedAdjacencyList = [];

//     >(1)<--->(4) ---->(5)
//    /          |       /|
// (0)     ------|------- |
//    \   v      v        v
//     >(2) --> (3) <----(6)
list2[0] = [
    { to: 1, weight: 3 },
    { to: 2, weight: 1 },
];
list2[1] = [
    { to: 4, weight: 1 },
];
list2[2] = [
    { to: 3, weight: 7 },
];
list2[3] = [ ];
list2[4] = [
    { to: 1, weight: 1 },
    { to: 3, weight: 5 },
    { to: 5, weight: 2 },
];
list2[5] = [
    { to: 2, weight: 18 },
    { to: 6, weight: 1 },
];
list2[6] = [
    { to: 3, weight: 1 },
];

//     >(1)<--->(4) ---->(5)
//    /          |       /|
// (0)     ------|------- |
//    \   v      v        v
//     >(2) --> (3) <----(6)

export const matrix2: WeightedAdjacencyMatrix = [
    [0, 3, 1,  0, 0, 0, 0], // 0
    [0, 0, 0,  0, 1, 0, 0],
    [0, 0, 7,  0, 0, 0, 0],
    [0, 0, 0,  0, 0, 0, 0],
    [0, 1, 0,  5, 0, 2, 0],
    [0, 0, 18, 0, 0, 0, 1],
    [0, 0, 0,  1, 0, 0, 1],
];
// -1 0, -1, 0, -1, -1, -1
export const largerList: WeightedAdjacencyList = [];
largerList[0] = [
    { to: 1, weight: 1 },
    { to: 2, weight: 7 },
    { to: 0, weight: 5 },
];
largerList[1] = [
    { to: 0, weight: 1 },
    { to: 2, weight: 4 },
    { to: 3, weight: 10 },
];
largerList[2] = [
    { to: 0, weight: 7 },
    { to: 1, weight: 4 },
    { to: 3, weight: 1 },
    { to: 4, weight: 2 },
];
largerList[3] = [
    { to: 1, weight: 10 },
    { to: 2, weight: 1 },
    { to: 4, weight: 2 },
    { to: 5, weight: 1 },
];

// Additional nodes and edges
largerList[4] = [
    { to: 0, weight: 5 },
    { to: 3, weight: 2 },
    { to: 2, weight: 3 },
    { to: 5, weight: 20 },
];

largerList[5] = [
    { to: 3, weight: 1 },
    { to: 4, weight: 20 },
];
