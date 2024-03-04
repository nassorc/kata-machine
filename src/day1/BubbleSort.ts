// 
// loop 
// compare i to i + 1
//    if i > greater than i + 1
//        swap

//         n
//       n
//     n  
//   n    
// n    
// 1 3 4 2 | 7
//       
// 1 3 2 | 4 7
// 
// 1 2 | 3 4 7
// 
// 1 | 2 3 4 7
// 
// 1 2 3 4 7

// 1 3 7 2 4 

export default function bubble_sort(arr: number[]): void {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        const temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = temp;
      }
    }
  }
}