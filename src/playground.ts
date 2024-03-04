import SinglyLinkedList from "./day1/SinglyLinkedList";

let list = new SinglyLinkedList<number>();

list.append(10);
list.append(5);
list.append(2);
list.append(1);
console.dir(list, { depth: Infinity });
// list.insertAt(99, 2);
list.remove(10);
console.dir(list, { depth: Infinity });
// console.log(list.get(list.length - 1));