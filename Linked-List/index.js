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

  insertAtEnd(data) {
    let temp = this.head;
    if (temp === null) {
      return this.insertAtHead(data);
    }
    const newNode = new Node(data);
    while (temp.next !== null) {
      temp = temp.next;
    }
    temp.next = newNode;
  }

  //Print all noded
  print() {
    let str = "";
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.data);
      str = str + temp.data;
      temp = temp.next;
    }
    return str;
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

  // Reverse the linked list
  reverse() {
    let next = null;
    let prev = null;
    let current = this.head;

    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
    return this.head;
  }
  isContainingCycle() {}
}

const list = new LinkedList();
list.insertAtHead(52);
list.insertAtHead(65);
list.insertAtHead(98);
// list.insertAtHead(99);
// console.log(list.removeFromHead());
console.log(list.insertAt(2, 50));
// list.insertAtEnd(850);
// list.print();
// // console.log(list.removeFrom(2));
// console.log("------");
// list.reverse();
// list.print();
// console.log(list.search(55));
// console.log(list.middleNode());

// Q.1 Check linkedlist contains cycle

// Q.2 Middle of Likedlist in O(n) using double pointer approach
LinkedList.prototype.middleNodeUsingFastSLowPointer = function () {
  let fast = this.head;
  let slow = this.head;

  while (slow !== null && fast.next !== null) {
    slow = slow.next;
    if (fast.next?.next) {
      fast = fast.next.next;
    } else {
      fast = fast.next;
    }
  }
  console.log(slow);
};
list.middleNodeUsingFastSLowPointer();
// console.log(list);
// Q.3 Reverse a linkedlist

// Q.4 Question from leetcode
// list.insertAtEnd(2);
// list.insertAtEnd(4);
// list.insertAtEnd(3);
// console.log(list);
// const value1 = list.print();

// const list2 = new LinkedList();
// list2.insertAtEnd(5);
// list2.insertAtEnd(6);
// list2.insertAtEnd(4);
// const value2 = list2.print();

// function addReverse(value1, value2) {
//   let iValue1 = value1.split("").reverse().join("");
//   iValue1 = parseInt(iValue1);
//   value2 = parseInt(value2.split("").reverse().join(""));
//   let result = iValue1 + value2;
//   result = result.toString().split("").reverse().join("");
//   console.log(result);
//   return result;
// }
// addReverse(value1, value2);

class DoubleLLNode {
  constructor(value) {
    this.prev = null;
    this.data = value;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertAtHead(value) {
    const node = new DoubleLLNode(value);
    if (this.head === null) {
      this.tail = node;
    }
    if (this.head !== null) {
      node.next = this.head;
      this.head.prev = node;
    }
    this.head = node;
    return this.head;
  }
  insertAtEnd(value) {
    const node = new DoubleLLNode(value);
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }
}

const doubleLL = new DoublyLinkedList();
doubleLL.insertAtHead(20);
doubleLL.insertAtHead(15);
doubleLL.insertAtHead(10);
doubleLL.insertAtEnd(52);
console.log(doubleLL);
