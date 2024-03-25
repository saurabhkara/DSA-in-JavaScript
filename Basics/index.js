console.log("Radha Rani");

//Q.1 Sum of all natural number from 1 to n

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

console.log(naturalNumberSum(5));
