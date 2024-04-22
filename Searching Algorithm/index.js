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

let arr1 = [1, 3, 5, 8, 9, 15, 18, 22];

function binarySearch(arr, key) {
  let leng = arr.length;
  let lower = 0;
  let upper = leng - 1;

  while (lower >= 0 && upper < leng) {
    let mid = parseInt((upper + lower) / 2);
    if (key == arr[mid]) {
      return mid;
    } else if (key < arr[mid]) {
      upper = mid - 1;
    } else {
      lower = mid + 1;
    }
  }
  return -1;
}
console.log(binarySearch(arr1, 8));
console.log(binarySearch(arr1, 1));

// Q.3 Binary Search using Recursion

let arr2 = [2, 3, 5, 6, 7, 9, 11];

function binarySearchRecursion(arr, key, lower, upper) {
  let mid = parseInt((lower + upper) / 2);
  if (lower > upper) {
    return -1;
  }
  if (arr[mid] === key) {
    return mid;
  }
  if (arr[mid] > key) {
    return binarySearchRecursion(arr, key, lower, mid - 1);
  } else {
    return binarySearchRecursion(arr, key, mid + 1, upper);
  }
}

console.log(binarySearchRecursion(arr2, 5, 0, 6));
console.log(binarySearchRecursion(arr2, 10, 0, 6));

// Q4 Floor and ceil value of given number which will be available in arr.

// i.e. arr= [1,5,8,11,12]
// floor value of 9 is 8
// ceil value of 9 is 11

const arr4 = [1, 5, 8, 11, 12];

function floorCeil(arr, target) {
  let start = 0,
    end = arr.length - 1;
  let floor = -1,
    ceil = -1;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] === target) {
      floor = arr[mid];
      ceil = arr[mid];
      return [floor, ceil];
    }
    if (arr[mid] > target) {
      ceil = arr[mid];
      end = mid - 1;
    } else {
      floor = arr[mid];
      start = mid + 1;
    }
  }
  return [floor, ceil];
}

console.log(floorCeil(arr4, 9));
console.log(floorCeil(arr2, 8));
