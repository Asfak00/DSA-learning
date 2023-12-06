// implement the stack
class Stack {
  constructor() {
    this.array = [];
  }

  // this is a mehtod to add value in the array
  push(value) {
    this.array.push(value);
    return this.array;
  }

  // this is a mehtod to delete value in the array
  pop(value) {
    this.array.pop(value);

    return this.array;
  }
}

const test1 = new Stack();
test1.push(1);
test1.push(2);
test1.push(3);
test1.pop();
test1.pop();
test1.pop();

console.log(test1);
