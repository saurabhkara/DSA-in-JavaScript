class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //Insert node the head
  insertAtHead(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  //Insert at partcicular index
  insertAt(index, data) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      return this.insertAtHead(data);
    }

    let temp = this.head;
    const newNode = new Node(data);
    while (index - 1) {
      temp = temp.next;
      index--;
    }
    newNode.next = temp.next;
    temp.next = newNode;
  }

  //Print all noded
  print() {
    let temp = this.head;
    while (temp) {
      console.log(temp.data);
      temp = temp.next;
    }
  }

  //Remove from Head
  removeFromHead() {
    const temp = this.head;
    this.head = temp.next;
    this.size--;
    return temp;
  }

  //Remove element
  removeFrom(index) {
    if (index < 0 || index > this.size) {
      return;
    }

    if (index === 0) {
      return this.removeFromHead();
    }

    let temp = this.head;
    while (index - 1) {
      temp = temp.next;
      index--;
    }
    let node = temp.next;
    temp.next = node.next;
    this.size--;
    return node;
  }

  //Search Item
  search(value) {
    let temp = this.head;
    let index = 0;
    while (temp) {
      if (temp.data === value) {
        return index;
      }
      temp = temp.next;
      index++;
    }
    return -1;
  }
  //Middle of Linked list
  middleNode() {
    let index = parseInt(this.size / 2);
    console.log("middle", index);
    let temp = this.head;
    while (index) {
      temp = temp.next;
      index--;
    }
    return temp;
  }
}

const list = new LinkedList();
list.insertAtHead(52);
list.insertAtHead(65);
list.insertAtHead(98);
console.log(list.removeFromHead());
console.log(list.insertAt(2, 50));
list.print();
// console.log(list.removeFrom(2));
list.print();
console.log(list.search(55));
console.log(list.middleNode());
