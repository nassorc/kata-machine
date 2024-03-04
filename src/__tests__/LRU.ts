import LRU from "@code/LRU";
import LRU2 from "@code/LRU2";

test("LRU", function () {
    const lru = new LRU<string, number>(3) as ILRU<string, number>;

    expect(lru.get("foo")).toEqual(undefined);
    lru.update("foo", 69);
    expect(lru.get("foo")).toEqual(69);

    lru.update("bar", 420);
    expect(lru.get("bar")).toEqual(420);

    lru.update("baz", 1337);
    expect(lru.get("baz")).toEqual(1337);

    lru.update("ball", 69420);
    expect(lru.get("ball")).toEqual(69420);
    expect(lru.get("foo")).toEqual(undefined);
    expect(lru.get("bar")).toEqual(420);
    lru.update("foo", 69);
    expect(lru.get("bar")).toEqual(420);
    expect(lru.get("foo")).toEqual(69);

    // shouldn't of been deleted, but since bar was get'd, bar was added to the
    // front of the list, so baz became the end
    expect(lru.get("baz")).toEqual(undefined);

    console.log("LRU2");

    const lru2 = new LRU2<string, number>(3) as ILRU<string, number>;

    expect(lru2.get("foo")).toEqual(undefined);
    lru2.update("foo", 69);
    expect(lru2.get("foo")).toEqual(69);

    lru2.update("bar", 420);
    expect(lru2.get("bar")).toEqual(420);

    lru2.update("baz", 1337);
    expect(lru2.get("baz")).toEqual(1337);

    lru2.update("ball", 69420);
    expect(lru2.get("ball")).toEqual(69420);
    expect(lru2.get("foo")).toEqual(undefined);
    expect(lru2.get("bar")).toEqual(420);
    lru2.update("foo", 69);
    expect(lru2.get("bar")).toEqual(420);
    expect(lru2.get("foo")).toEqual(69);

    // shouldn't of been deleted, but since bar was get'd, bar was added to the
    // front of the list, so baz became the end
    expect(lru2.get("baz")).toEqual(undefined);
});

