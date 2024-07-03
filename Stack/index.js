class Stack {
  constructor(size) {
    this.arr = [];
    this.size = size;
    this.top = -1;
  }

  push(item) {
    this.arr[++this.top] = item;
  }
  pop() {
    this.arr[this.top--];
  }
  isEmpty() {
    if (this.top === -1) {
      return true;
    }
    return false;
  }
  isFull() {
    if (this.size === this.top + 1) {
      return true;
    }
    return false;
  }
}

const stack = new Stack(5);

console.log("#stack", stack);
stack.push(5);
stack.push(4);
console.log("#stack", stack);
stack.pop();
console.log("#stack", stack);
stack.push(3);
console.log("#stack", stack);
