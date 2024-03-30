console.log("Ram Ram");

// Q.1 How do you check if an element exist?

let arr1 = [1, 2, 5, 7, 8, 6];

function checkElement(arr, elem) {
  if (!Array.isArray(arr) || typeof elem !== "number") {
    return null;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elem) {
      return true;
    }
  }
  return false;
}

// inbuilt method includes() can also be used.
// console.log(checkElement({}, 6));
// console.log(checkElement(arr1, ""));
// console.log(checkElement(arr1, 5));
// console.log(checkElement(arr1, 3));

// Q.2 Check element exist and return array index

let arr2 = [5, 4, 3, 4, 8];

function returnIndex(arr, elem) {
  if (!Array.isArray(arr) || typeof elem !== "number") {
    return null;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elem) {
      return i;
    }
  }
  return -1;
}

// indexOf() can be used to get index
console.log(returnIndex(arr2, 2));
console.log(returnIndex(arr2, 3));

// Q.3 How to add, delete and update element from specific index.

let arr3 = [4, 8, 7, 9, 6, 5];

function addElem(arr, elem, index) {
  if (!Array.isArray(arr) || typeof elem !== "number") {
    return null;
  }
  arr[index] = elem;
  return arr;
}
//push() can be used to add element in array
// console.log(addElem(arr3, 5, 6));
// console.log(addElem(arr3, 9, 7));

function updateElem(arr, elem, index) {
  if (!Array.isArray(arr) || typeof elem !== "number") {
    return null;
  }
  //   arr[index] = elem;
  arr.splice(index, 0, elem);
  return arr;
}

// console.log(updateElem(arr3, 2, 3));
// console.log(updateElem(arr3, 0, 5));

function deleteElem(arr, index) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.splice(index, 1);
}

// console.log(deleteElem(arr3, 2));

// Q.4 Difference between Slice and Splice method
const arr4 = [8, 1, 0, 2, 3, 4];

const res = arr4.slice(1, 4);
// console.log(res);

// Q.5 Shallow copy and Deep Copy

// Q.6 Make Deep copy of array

let arr5 = [12, 45, 78, 98];
let tempArr = arr5; //Shallow copy;
tempArr[0] = 587;
console.log(arr5);

let deepArr = [...arr5];
deepArr[1] = 879;
console.log(arr5);
