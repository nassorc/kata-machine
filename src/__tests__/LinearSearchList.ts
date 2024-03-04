import linear_fn from "@code/LinearSearchList"
import linear_fn2 from "@code/LinearSearchList2"

test("linear search array", function() {

    const foo = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
    expect(linear_fn(foo, 69)).toEqual(true);
    expect(linear_fn(foo, 1336)).toEqual(false);
    expect(linear_fn(foo, 69420)).toEqual(true);
    expect(linear_fn(foo, 69421)).toEqual(false);
    expect(linear_fn(foo, 1)).toEqual(true);
    expect(linear_fn(foo, 0)).toEqual(false);

    expect(linear_fn2(foo, 69)).toEqual(true);
    expect(linear_fn2(foo, 1336)).toEqual(false);
    expect(linear_fn2(foo, 69420)).toEqual(true);
    expect(linear_fn2(foo, 69421)).toEqual(false);
    expect(linear_fn2(foo, 1)).toEqual(true);
    expect(linear_fn2(foo, 0)).toEqual(false);
});


