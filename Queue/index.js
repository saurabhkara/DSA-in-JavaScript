class Queue {
  constructor(size) {
    this.data = [];
    this.front = -1;
    this.rear = -1;
    this.size = size;
  }

  enqueue(data) {
    if (this.front === -1) {
      this.front = 0;
    }
    this.rear = (this.rear + 1) % this.size;
    this.data[this.rear] = data;
  }
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    let item = this.data[this.front];
    this.data[this.front] = null;
    this.front = (this.front + 1) % this.size;
    return item;
  }
  isEmpty() {
    return this.front === this.rear;
  }
}

const myQueue = new Queue(5);
myQueue.enqueue(5);
myQueue.enqueue(4);
myQueue.enqueue(3);
myQueue.enqueue(2);
myQueue.enqueue(1);
myQueue.dequeue(); //5
myQueue.dequeue(); //4
myQueue.dequeue(); // 3
myQueue.dequeue(); // 2
myQueue.dequeue(); //1
console.log(myQueue);
