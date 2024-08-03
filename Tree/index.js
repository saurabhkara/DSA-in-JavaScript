// Tree - is a non-linear data structure in which a collection of elements known as nodes are connected to each other via edges such that there exists exactly one path between any two nodes.
class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.data = value;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(key) {
    const node = new Node(key);
    if (this.root === null) {
      this.root = node;
      return true;
    }

    let temp = this.root;

    let flag = true;
    while (flag) {
      console.log(temp);
      if (temp.data === key) {
        flag = false;
        return false;
      }

      if (temp.data > key) {
        if (temp.left === null) {
          temp.left = node;
          flag = false;
          return true;
        } else {
          temp = temp.left;
        }
      } else if (temp.data < key) {
        if (temp.right === null) {
          temp.right = node;
          flag = false;
          return true;
        } else {
          temp = temp.right;
        }
      }
    }
  }
}

const bst = new BST();
bst.insert(54);
bst.insert(30);
bst.insert(55);
console.log(bst);
