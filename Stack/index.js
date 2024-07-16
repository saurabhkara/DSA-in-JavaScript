//A Stack is a linear data structure that follows a particular order in which the operations are performed.
//The order may be LIFO(Last In First Out) or FILO(First In Last Out). LIFO implies that the element that is inserted last,
//comes out first and FILO implies that the element that is inserted first, comes out last

class Stack {
  constructor(size) {
    this.arr = [];
    this.size = size;
    this.top = -1;
  }

  push(item) {
    if (!this.isFull()) {
      this.arr[++this.top] = item;
      return this.top;
    }
    return -1;
  }
  pop() {
    if (this.isEmpty()) {
      return;
    } else {
      return this.arr[this.top--];
    }
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
  peakItem() {
    if (this.isEmpty()) {
      return;
    } else {
      return this.arr[this.top];
    }
  }
  sizeOfStack() {
    return this.top + 1;
  }
  printItems() {
    if (this.isEmpty()) {
      return;
    }
    let index = 0;
    let result = "";
    while (index <= this.top) {
      result += this.arr[index++] + " ";
    }
    return result;
  }
  contains(item) {
    if (this.isEmpty()) {
      return false;
    }
    let index = 0;
    while (index <= this.top) {
      if (item === this.arr[index++]) {
        return true;
      }
    }
    return false;
  }
}

const stack = new Stack(5);

console.log("#stack", stack);
console.log(stack.push(5));
console.log(stack.push(4));
console.log(stack.push(3));
console.log(stack.push(6));
console.log(stack.push(7));
console.log(stack.push(8));
console.log("#stack", stack);
stack.pop();
console.log("#stack", stack);
stack.push(3);
console.log("#stack", stack);
console.log(stack.peakItem());
console.log(stack.sizeOfStack());
console.log(stack.printItems());
console.log(stack.contains(3));
