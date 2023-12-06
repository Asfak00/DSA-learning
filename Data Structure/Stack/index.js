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
  pop() {
    this.array.pop();

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

// try to implement stack in another way
class AnotherWay {
  constructor() {
    (this.numberObj = {}), (this.count = 0);
  }

  push(value) {
    this.count++;
    this.numberObj[this.count] = value;
  }

  pop() {
    delete this.numberObj[this.count];
    this.count--;
  }

  currentItem() {
    return this.numberObj[this.count];
  }
}

const test2 = new AnotherWay();
test2.push(2);
test2.push(5);
test2.push(8);
console.log(test2);
console.log(test2.currentItem());
