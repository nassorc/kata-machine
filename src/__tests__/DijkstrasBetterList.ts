import { dij, getCheapestNode, hasUnvisited } from "@code/DijkstrasBetterList";
import { list1, simpleList1, largerList } from "./graph";

test("dijkstra via adj list", function () {
    // console.log(simpleList1);
    expect(dij(largerList, 0, 5)).toEqual([ 0, 1, 2, 3, 5 ]);
    expect(dij(simpleList1, 0, 3)).toEqual([0, 1, 2, 3]);
    expect(dij(list1, 0, 6)).toEqual([0, 1, 4, 5, 6]);
});

test("hasUnvisited", () => {
    type Test = [boolean[], boolean];
    const tests: Test[] = [
        [[true], false],
        [[false], true],
        [[false, false], true],
        [[false, false], true],
        [[false, true], true],
        [[true, true], false],
    ];

    for(let [test, expected] of tests) {
        expect(hasUnvisited(test)).toBe(expected);
    }
});

test("getCheapestNode", () => {
    type Test = [boolean[], number[], number];
    const tests: Test[] = [
        [[false], [10], 0],
        [[false, false], [10, 5], 1],
        [[false, false, false], [10, 5, 1], 2],
        [[false, false, false], [10, 1, 5], 1],
        [[false, true, false], [10, 1, 5], 2],
        [[false, true, true], [10, 1, 5], 0],
    ];

    for(let [seen, costs, expected] of tests) {
        expect(getCheapestNode(seen, costs)).toBe(expected);
    }
});