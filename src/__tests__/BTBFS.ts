import bfs from "@code/BTBFS";
import bfs2 from "@code/BTBFS2";
import { tree } from "./tree";

test("bt bfs", function () {
    expect(bfs(tree, 45)).toEqual(true);
    expect(bfs(tree, 7)).toEqual(true);
    expect(bfs(tree, 9999)).toEqual(false);
    expect(bfs(tree, 69)).toEqual(false);

    expect(bfs2(tree, 45)).toEqual(true);
    expect(bfs2(tree, 7)).toEqual(true);
    expect(bfs2(tree, 9999)).toEqual(false);
    expect(bfs2(tree, 69)).toEqual(false);
});




