import MinHeap from "./day1/MinHeap";

function insert(h: MinHeap, n: number) {
  for (let i = 0; i < n; ++i) {
    h.insert(Math.floor(Math.random() * n));
  }
}

function del(h: MinHeap, n: number) {
  for (let i = 0; i < n; ++i) {
    h.delete();
  }
}

function peek(h: MinHeap, n: number) {
  for (let i = 0; i < n; ++i) {
    h.peek();
  }
}

function time(cb: () => void): number {
  const now = Date.now();
  cb();
  return Date.now() - now;
}

let tests = [10, 100, 1000, 10000, 1000000, 1_000_000, 10_000_000];

console.log("inserting");
tests.forEach(t => {
  const a = new MinHeap();
  console.log(t, time(() => insert(a, t)))
});

console.log("deleting");
tests.forEach(t => {
  const a = new MinHeap();
  insert(a, t);
  console.log(t, time(() => del(a, t)));
});

console.log("peeking");
tests.forEach(t => {
  const a = new MinHeap();
  insert(a, t);
  console.log(t, time(() => peek(a, t)));
});
