// searches a sorted array
// complexity: O(log n)
// goal: find target in array
// how? Because the input is sorted, we can compare the middle value to the target.
// and if the target is less than the m, the value must be on the left side, if greater,
// it must be on the right, otherwise, we found the target.
// m = (h - l) / 2 + low
// (l, h]

export default function bs_list(haystack: number[], needle: number): boolean {
  let l = 0;
  let h = haystack.length;
  while (l < h) {
    let m = Math.floor((h - l) / 2) + l;
    if (needle == haystack[m]) {
      return true;
    }
    else if (needle < haystack[m]) {
      h = m;
    }
    else {
      l = m + 1;
    }
  }
  return false;
}