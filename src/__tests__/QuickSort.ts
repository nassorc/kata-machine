import quick_sort, { swap } from "@code/QuickSort";


describe("quick-sort", () => {
    test("quick-sort", function () {
        const arr = [9, 3, 7, 4, 69, 420, 42];

        quick_sort(arr);
        expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);

        const arr2 = [10, 7, 4, 20, 100, 9, 11, 70, 42, 58, 69, 12];

        quick_sort(arr2);
        expect(arr2).toEqual([4, 7, 9, 10, 11, 12, 20, 42, 58, 69, 70, 100]);
    });

    test("swap", () => {
        let arr = [1,2,3,4,5];

        swap(arr, 0, arr.length - 1);
        expect(arr).toEqual([5,2,3,4,1]);

        swap(arr, 1, 2);
        expect(arr).toEqual([5,3,2,4,1]);
    });
})