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

console.log(countDigit(15462));
console.log(countDigit("asd"));
console.log(countDigit(-546));
