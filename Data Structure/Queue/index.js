class Queue {
  constructor() {
    this.database = [];
  }

  unshift(value) {
    this.database.unshift(value);
  }

  pop() {
    this.database.pop();
  }
}

const test1 = new Queue();
test1.unshift(5);
test1.unshift(4);
test1.unshift(3);
test1.pop();
test1.pop();
test1.pop();
console.log(test1);
