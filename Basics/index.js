console.log("Radha Rani");

// Q.1 Sum of all natural number from 1 to n

function naturalNumberSum(n) {
  if (n < 1 || !n) {
    return;
  }
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}

// console.log(naturalNumberSum(5));
// console.log(naturalNumberSum(10));

// Q.2 Sum of digits of a number

function sumOfDigits(num) {
  if (!num || typeof num !== "number") {
    return;
  }
  let sum = 0;
  let temp = num;
  while (temp) {
    let lastDigit = temp % 10;
    temp = parseInt(temp / 10);
    sum = sum + lastDigit;
  }
  console.log(sum);
  return sum;
}

// console.log(sumOfDigits(153));

// Q.3 Count the number of digits in number

function countDigit(num) {
  if (!num || typeof num !== "number") {
    return;
  }
  let count = 0;
  let temp = Math.abs(num);
  do {
    count++;
    temp = parseInt(temp / 10);
  } while (temp);
  return count;
}

// console.log(countDigit(15462));
// console.log(countDigit("asd"));
// console.log(countDigit(-546));

// Q.4 Check number is Palindrome

function isPalindrome(num) {
  if (!num || typeof num !== "number") {
    return;
  }
  let temp = num;
  let reverse = 0;
  while (temp) {
    let lastD = temp % 10;
    temp = parseInt(temp / 10);
    reverse = reverse * 10 + lastD;
  }
  return num === reverse;
}

// console.log(isPalindrome(121));
// console.log(isPalindrome(1234));
// console.log(isPalindrome());
// console.log(isPalindrome("jkjhh"));

// Q.5 Fibonacci series using loop
// The Fibonacci sequence is a sequence where the next term is the sum of the previous two terms

function fibonacci(num) {
  if (num < 2) {
    return num;
  }
  let prev = 0;
  let currrent = 1;
  let next;
  for (let i = 2; i <= num; i++) {
    next = prev + currrent;
    prev = currrent;
    currrent = next;
  }
  console.log(next);
  return next;
}

// fibonacci(1);
// fibonacci(0);
// fibonacci(2);
// fibonacci(3);

// Q.6 Find the missing number in array

let missingArr = [1, 2, 3, 4, 5, 6];
let msArr = [0, 1, 2, 3, 4];

function missingNumber(arr) {
  let sum = 0;
  const len = arr.length;
  for (let i = 0; i <= len - 1; i++) {
    sum = sum + arr[i];
  }
  const totalSum = len * ((len + 1) / 2);
  const mn = totalSum - sum;
  return mn;
}

// console.log(missingNumber(missingArr));
// console.log(missingNumber(msArr));
