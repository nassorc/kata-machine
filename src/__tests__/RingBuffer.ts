import RingBuffer from "@code/RingBuffer";
import RingBuffer2 from "@code/RingBuffer2";

test("RingBuffer", function() {
    const buffer = new RingBuffer2<number>(3);

    buffer.push(2);
    buffer.push(4);
    buffer.push(8);

    buffer.push(58);
    buffer.push(59);
    buffer.push(60);
    buffer.push(100);

    expect(buffer.get(0)).toBe(59);
    expect(buffer.get(1)).toBe(60);
    expect(buffer.get(2)).toBe(100);

    expect(buffer.pop()).toBe(59);
    expect(buffer.pop()).toBe(60);
    expect(buffer.pop()).toBe(100);
    expect(buffer.pop()).toBe(undefined);

    buffer.push(10);
    buffer.push(9);
    buffer.push(8);
    buffer.push(7);
    buffer.push(6);

    expect(buffer.flush()).toEqual([8, 7, 6]);
});



