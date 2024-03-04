export default function binary_fn2(arr: number[], needle: number): boolean {
    let lo = 0;
    let hi = arr.length;

    while (lo < hi) {
        let m = Math.floor(((hi - lo) / 2) + lo);

        if (arr[m] === needle) {
            return true;
        }
        else if (needle > arr[m]) {
            lo = m + 1;
        }
        else {
            hi = m;
        }
    }

    return false;
}
