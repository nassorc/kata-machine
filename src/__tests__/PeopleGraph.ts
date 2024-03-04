import Person from "@code/PeopleGraph";

test("graphs", () => {
  let alice = new Person("alice");
  let bob = new Person("bob");

  alice.addFriend(bob);
  expect(alice.length()).toBe(1);
  expect(alice.get("bob")).toEqual(bob);
});