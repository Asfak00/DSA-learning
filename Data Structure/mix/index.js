class newNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// stack linked list
class StackLinkedList {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(value) {
    let newBook = new newNode(value);

    if (!this.top) {
      this.top = newBook;
      this.bottom = newBook;
      this.length++;
    } else {
      newBook.next = this.top;
      this.top = newBook;
      this.length++;
    }
  }

  pop() {
    if (!this.top) {
      return null;
    }

    this.top = this.top.next;
    this.length--;
  }
}

let test1 = new StackLinkedList();
test1.push("book1");
test1.push("book2");
test1.push("book3");
test1.pop();

console.log(test1);

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(value) {
    let newPerson = new newNode(value);

    if (!this.first) {
      this.first = newPerson;
      this.last = newPerson;
    } else {
      this.last.next = newPerson;
      this.last = newPerson;
    }

    this.length++;
  }

  pop() {
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }

    this.length--;
  }
}

let test2 = new Queue();
test2.push("Rahi");
test2.push("Alamin");
test2.push("Naim");
test2.push("Jisan");
test2.pop();
test2.pop();
test2.pop();
console.log(test2);
