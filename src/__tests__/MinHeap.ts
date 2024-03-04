import MinHeap from "@code/MinHeap";
import MinHeap2 from "@code/MinHeap2";
import MinHeap3 from "@code/MinHeap3";

test("min heap", function () {
    const heap = new MinHeap();

    expect(heap.length).toEqual(0);

    heap.insert(5);
    heap.insert(3);
    heap.insert(69);
    heap.insert(420);
    heap.insert(4);
    heap.insert(1);
    heap.insert(8);
    heap.insert(7);

    expect(heap.length).toEqual(8);

    expect(heap.delete()).toEqual(1);
    expect(heap.delete()).toEqual(3);
    expect(heap.delete()).toEqual(4);
    expect(heap.length).toBe(5);
    expect(heap.delete()).toEqual(5);
    expect(heap.delete()).toEqual(7);
    expect(heap.delete()).toEqual(8);
    expect(heap.delete()).toEqual(69);
    expect(heap.delete()).toEqual(420);
    expect(heap.length).toBe(0);

    const heap2 = new MinHeap2();

    expect(heap2.length).toEqual(0);

    heap2.insert(5);
    heap2.insert(3);
    heap2.insert(69);
    heap2.insert(420);
    heap2.insert(4);
    heap2.insert(1);
    heap2.insert(8);
    heap2.insert(7);

    expect(heap2.length).toEqual(8);

    expect(heap2.delete()).toEqual(1);
    expect(heap2.delete()).toEqual(3);
    expect(heap2.delete()).toEqual(4);
    expect(heap2.length).toBe(5);
    expect(heap2.delete()).toEqual(5);
    expect(heap2.delete()).toEqual(7);
    expect(heap2.delete()).toEqual(8);
    expect(heap2.delete()).toEqual(69);
    expect(heap2.delete()).toEqual(420);
    expect(heap2.length).toBe(0);

    let heap3 = new MinHeap3(
        (a: GraphEdge, b: GraphEdge) => a.weight - b.weight
    );

    heap3.insert(createNode(1, 5));
    heap3.insert(createNode(2, 3));
    heap3.insert(createNode(3, 100));
    heap3.insert(createNode(3, 50));
    heap3.insert(createNode(3, 1));

    expect(heap3.length).toBe(5);

    expect(heap3.delete()?.weight).toBe(1);
    expect(heap3.delete()?.weight).toBe(3);
    expect(heap3.delete()?.weight).toBe(5);
    expect(heap3.delete()?.weight).toBe(50);
    expect(heap3.delete()?.weight).toBe(100);

    expect(heap3.length).toBe(0);
});

function createNode(to: number, weight: number): GraphEdge {
    return { to, weight };
}


