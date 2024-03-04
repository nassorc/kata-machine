import SinglyLinkedList from "@code/SinglyLinkedList";
import { test_list } from "./ListTest";

test("linked-list", function () {
    const list = new SinglyLinkedList<number>();
    test_list(list);
});


describe("LinkedList", () => {
    it("should append, prepend, and get", () => {
        const list = new SinglyLinkedList<number>();

        list.append(5);
        list.append(10);
        list.append(15);

        expect(list.length).toBe(3);
        list.append(20);
        expect(list.length).toBe(4);

        expect(list.get(0)).toBe(5);
        expect(list.get(1)).toBe(10);
        expect(list.get(3)).toBe(20);

        list.prepend(25);
        expect(list.get(0)).toBe(25);
        expect(list.get(1)).toBe(5);
    });

    it("should insertAt", () => {
        const list = new SinglyLinkedList<number>();
        list.append(5);
        list.append(10);
        list.append(15);
        expect(list.length).toBe(3);

        expect(list.get(1)).toBe(10);

        list.insertAt(99, 1);

        expect(list.get(1)).toBe(99);
        expect(list.get(0)).toBe(5);
        expect(list.get(2)).toBe(10);
    });

    it("should remove and removeAt", () => {
        const list = new SinglyLinkedList<number>();

        list.append(5);
        list.append(10);
        expect(list.length).toBe(2);
        expect(list.remove(5)).toBe(5);
        expect(list.length).toBe(1);

        list.prepend(5);
        list.append(15)
        expect(list.remove(15)).toBe(15);
        expect(list.remove(10)).toBe(10);
        expect(list.length).toBe(1);

        list.append(10)
        list.append(15)
        expect(list.remove(10)).toBe(10);
        expect(list.remove(15)).toBe(15);
        expect(list.remove(5)).toBe(5);
        expect(list.length).toBe(0);

        expect(list.remove(100)).toBeUndefined();

        list.append(5);
        list.append(10)
        list.append(15)
        list.append(20)
        expect(list.length).toBe(4);
        expect(list.removeAt(1)).toBe(10);
        expect(list.removeAt(0)).toBe(5);
        expect(list.removeAt(1)).toBe(20);
        expect(list.removeAt(0)).toBe(15);
        expect(list.length).toBe(0);

        // list.append(10);
        // list.append(15);

        // expect(list.length).toBe(3);
        // list.remove(10);
        // expect(list.length).toBe(2);
        // expect(list.get(0)).toBe(5);
        // expect(list.get(1)).toBe(15);
    });
});