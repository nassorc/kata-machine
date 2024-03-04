import bubble_sort from "@code/BubbleSort";
import bubble_sort2 from "@code/BubbleSort2";

test("bubble-sort", function () {
    const arr = [9, 3, 7, 4, 69, 420, 42];

    bubble_sort(arr);
    expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);

    const arr2 = [9, 3, 7, 4, 69, 420, 42];

    bubble_sort(arr2);
    expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
});

