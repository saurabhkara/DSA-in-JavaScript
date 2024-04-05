console.log("Raja Ram");

// Q.1 Factorial of given number using recusion

function factorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

console.log(factorial(5));

// Q.2 Sum of elements of given array using recursion

const arr1 = [1, 2, 3, 4, 5, 6];

function sumElement(arr, n) {
  if (n == 1) {
    return arr[0];
  }
  const lastElem = arr.pop();
  arr.length = n - 1;
  return lastElem + sumElement(arr, n - 1);
}

console.log(sumElement(arr1, 6));

// Q.3 find the product of elements of given array using recursion

const arr2 = [1, 2, 3, 4];

function productOfElements(arr, n) {
  if (n === 1) {
    return arr[0];
  }
  const lastElem = arr[n - 1];
  arr.length = n - 1;
  return lastElem * productOfElements(arr, n - 1);
}

console.log(productOfElements(arr2, 4));

// Q.4 Fibonacci of given numner using recusion

function fibonacci(num) {
  if (num === 0 || num === 1) {
    return num;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));

// Q.5 Check whether a string is palindrome or not

// Q.6 Create pow(x, n) function which returns x^n

// Q.7 Create a function which returns the sum of digits of a number (e.g., sumOfDigits(453) is 12)

// Q.8 Create a function which returns the number of digits in a number (e.g., countDigits(453) is 3)

// Q.9 Create a function to find the LCM of two numbers

// Q.10 Create a function to find the GCD of two numbers

// Q,11 Create a function to reverse a string
