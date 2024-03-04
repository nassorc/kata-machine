export default class Person {
  private friends: Person[];

  constructor(private name: string) {
    this.friends = [];
  }

  addFriend(f: Person) {
    this.friends.push(f);
  }

  get(name: string): Person | undefined {
    return this.friends.find(f => f.name === name);
  }

  length(): number {
    return this.friends.length;
  }

}