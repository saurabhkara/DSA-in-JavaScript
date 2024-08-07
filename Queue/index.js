class Queue {
  constructor(size) {
    this.data = [];
    this.front = 0;
    this.rear = 0;
    this.size = size;
  }

  enqueue(data) {
    if (this.size === this.rear) {
      return "Queue is full";
    }
    this.data[this.rear++] = data;
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    let item = this.data[0];
    for (let i = 0; i < this.rear - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.rear--;
    return item;
  }

  isEmpty() {
    return this.front === this.rear;
  }
  peek() {
    return this.data[this.front];
  }
  printItems() {
    let items = "";
    for (let i = 0; i < this.rear; i++) {
      items = items + this.data[i];
    }
    return items;
  }
}

const myQueue = new Queue(5);
myQueue.enqueue(5);
myQueue.enqueue(4);
myQueue.enqueue(3);
myQueue.enqueue(2);
myQueue.enqueue(1);

myQueue.dequeue(); //5
myQueue.enqueue(6);
myQueue.dequeue(); //4
myQueue.dequeue(); // 3
myQueue.dequeue(); // 2
myQueue.dequeue(); //1
console.log(myQueue);
console.log(myQueue.printItems());

// Queue using Linked list

class QNode {
  constructor(value) {
    this.key = value;
    this.next = null;
  }
}

class QueueUsingLL {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(data) {
    const node = new QNode(data);
    if (this.front === null && this.rear === null) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
  }
  dequeue() {
    if (this.front === null) {
      return "Queue is Empty";
    }
    let item = this.front.key;
    this.front = this.front.next;
    if (this.front === null) {
      this.rear = null;
    }
    return item;
  }
  isEmpty() {
    return this.front === null && this.rear === null;
  }
}
const queueLL = new QueueUsingLL();
queueLL.enqueue(10);
queueLL.enqueue(15);
queueLL.enqueue(20);
console.log(queueLL.dequeue());
console.log(queueLL.dequeue());
console.log(queueLL.dequeue());
console.log(queueLL);
console.log(queueLL.isEmpty());

// Circular Queue

class CircularQueue {
  constructor(size) {
    this.size = size;
    this.data = [];
    this.front = -1;
    this.rear = -1;
  }
  enqueue(value) {
    if (this.isFull()) {
      return -1;
    }
    if (this.front === -1) {
      this.front = 0;
    }
    this.rear = (this.rear + 1) % this.size;
    this.data[this.rear] = value;
    return this.rear;
  }
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    let item = this.data[this.front];
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.size;
    }
    return item;
  }
  isEmpty() {
    if (this.front === -1) {
      return true;
    }
    return false;
  }
  isFull() {
    if (
      (this.front === 0 && this.rear === this.size - 1) ||
      this.rear === (this.front % this.size) - 1
    ) {
      return true;
    }
    return false;
  }
}

const circularQ1 = new CircularQueue(4);
console.log(circularQ1.enqueue(12));
console.log(circularQ1.enqueue(10));
console.log(circularQ1.enqueue(5));
console.log(circularQ1.enqueue(4));
console.log(circularQ1.enqueue(2));
console.log(circularQ1.dequeue());
console.log(circularQ1.dequeue());
console.log(circularQ1.dequeue());
console.log(circularQ1.dequeue());
console.log(circularQ1.dequeue());
console.log(circularQ1);
