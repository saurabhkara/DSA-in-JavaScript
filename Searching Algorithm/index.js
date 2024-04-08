console.log("Sri Radhe");

// Q.1 Linear Search

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
