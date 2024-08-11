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

  insertNodeUsingRecurssion(value, root = this.root) {
    if (root === null) {
      return new Node(value);
    }

    if (root.data === value) {
      return;
    }

    if (root.data > value) {
      root.left = this.insertNodeUsingRecurssion(value, root.left);
    } else if (root.data < value) {
      root.right = this.insertNodeUsingRecurssion(value, root.right);
    }
    return root;
  }

  search(key) {
    let temp = this.root;
    if (temp === null) {
      return -1;
    }

    while (temp) {
      if (temp.data === key) {
        return temp;
      } else if (temp.data > key) {
        temp = temp.left;
      } else {
        temp = temp.right;
      }
    }
    return -1;
  }

  searchUsingrecursion(key, root = this.root) {
    if (root === null) {
      return -1;
    }
    if (root.data === key) {
      return root;
    } else if (root.data > key) {
      return this.searchUsingrecursion(key, root.left);
    } else {
      return this.searchUsingrecursion(key, root.right);
    }
  }

  deleteNode(key, root = this.root) {
    if (root === null) {
      return -1;
    }

    if (root.data < key) {
      root.right = this.deleteNode(key, root.right);
    } else if (root.data > key) {
      root.left = this.deleteNode(key, root.left);
    } else {
      if (root.left === null && root.right === null) {
        return null;
      } else if (node.left === null) {
        return root.right;
      } else if (node.right === null) {
        return root.left;
      } else {
        const tempNode = this.inorderNode(root.right);
        root.data = tempNode.data;
        root.right = this.deleteNode(tempNode.data, root.right);
      }
    }
    return root;
  }

  inorderNode(root) {
    if (root.left === null) {
      return root;
    }
    return this.inorderNode(root.left);
  }
}

const bst = new BST();
bst.insert(54);
bst.insert(30);
bst.insert(55);
bst.insertNodeUsingRecurssion(60);
console.log(bst.search(55));
console.log(bst.search(65));
console.log(bst.searchUsingrecursion(30));
console.log(bst.searchUsingrecursion(40));
console.log(bst);
