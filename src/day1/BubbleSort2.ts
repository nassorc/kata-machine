export default function bubble_sort2(arr: number[]) {
    for (let i = 0; i < arr.length; ++i) {
        for (let j = 0; j < arr.length - i - 1; ++j) {
            if (arr[j] > arr[j+1]) {
                let tmp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = tmp;
            }
        }
    }
}
