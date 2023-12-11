class Node {
  constructor(value) {
    this.leftChid = null;
    this.rightChild = null;
    this.value = value;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  addNode(value) {
    let newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentRoot = this.root;
      let added = false;
      while (!added && currentRoot) {
        if (value < currentRoot.value) {
          if (currentRoot.leftChid === null) {
            currentRoot.leftChid = newNode;
            added = true;
          } else {
            currentRoot = currentRoot.leftChid;
          }
        } else if (value > currentRoot.value) {
          if (currentRoot.rightChild === null) {
            currentRoot.rightChild = newNode;
            added = true;
          } else {
            currentRoot = currentRoot.rightChild;
          }
        }
      }
    }
  }

  findNode(value) {
    if (!this.root) {
      return null;
    }
    let currentRoot = this.root;
    while (currentRoot) {
      if (currentRoot.value === value) {
        return currentRoot;
      } else if (value < currentRoot.value) {
        currentRoot = currentRoot.leftChid;
      } else {
        currentRoot = currentRoot.rightChild;
      }
    }
  }
}

let test = new BinaryTree();
test.addNode(50);
test.addNode(40);
test.addNode(60);
test.addNode(80);
test.addNode(100);
test.addNode(30);
console.log(test.findNode(60));
console.log(test);
