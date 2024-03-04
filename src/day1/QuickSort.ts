export function qs(arr: number[], start: number, end: number) {
  if (start >= end) {
    return;
  }

  let pIdx = partition(arr, start, end);
  // printPartition(arr, start, end, pIdx);
  qs(arr, start, pIdx - 1);
  qs(arr, pIdx + 1, end);
}

export function printPartition(arr: number[], start: number, end: number, partition: number) {
  let out = "[";
  for (let i = start; i <= end; ++i) {
    let sep = (i < end) ? " " : "";
    if (i == partition) {
      out += `*${arr[i]}*${sep}`;
    }
    else {
      out += `${arr[i]}${sep}`;
    }
  }
  out += "]";
  console.log(out);
}

// In place weak sort array and return partion index
export function partition(arr: number[], start: number, end: number): number {
  // identify pivot
  let pivot = arr[end]; // last element

  // weak sort
  // define pivot index pointer
  let p = start;

  // walk array with index i
  for (let i = start; i < end; ++i) {  // stop before pivot
    if (arr[i] <= pivot) {
      swap(arr, i, p);
      p += 1;
    }
  }

  // swap parition with p
  swap(arr, end, p);

  return p;
}

export function swap(arr: number[], i: number, j: number) {
  if (i >= arr.length || j >= arr.length) {
    throw new Error("i or j out of bounds");
  }
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

export default function quick_sort(arr: number[]): void {
  qs(arr, 0, arr.length - 1);
}