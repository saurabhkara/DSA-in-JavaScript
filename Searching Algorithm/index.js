console.log("Sri Radhe");

// Q.1 Linear Search

// Time Complexity of linear search - O(n)

let arr = [1, 5, 4, 8, 7, 9];

function linearSearch(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch(arr, 8));

// Q.2 Binary Search

// Q.3 Binary Search using Recursion
