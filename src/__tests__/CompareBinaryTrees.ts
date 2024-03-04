import compare from "@code/CompareBinaryTrees";
import compare2 from "@code/CompareBinaryTrees2";
import { tree, tree2 } from "./tree";

test("Compare Binary Trees", function () {
    expect(compare(tree, tree)).toEqual(true);
    expect(compare(tree, tree2)).toEqual(false);

    expect(compare2(tree, tree)).toEqual(true);
    expect(compare2(tree, tree2)).toEqual(false);
});





