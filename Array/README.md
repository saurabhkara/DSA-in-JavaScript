## Array Qurstions in JavaScript

## Q.1 How do you check if an element exist ?

// inbuilt method includes() can also be used

```
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

console.log(checkElement({}, 6));
console.log(checkElement(arr1, ""));
console.log(checkElement(arr1, 5));
console.log(checkElement(arr1, 3));
```

### Q.2 Check element exist and return array index

indexOf() method can be used to get index

```
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

console.log(returnIndex(arr2, 2));
console.log(returnIndex(arr2, 3));
```

### Q.3 How to add, delete and update element from/to specific index

```
let arr3 = [4, 8, 7, 9, 6, 5];

function addElem(arr, elem, index) {
  if (!Array.isArray(arr) || typeof elem !== "number") {
    return null;
  }
  arr[index] = elem;
  return arr;
}

console.log(addElem(arr3, 5, 6));
console.log(addElem(arr3, 9, 7));
```

push() method can be used to add element in array

```
function updateElem(arr, elem, index) {
  if (!Array.isArray(arr) || typeof elem !== "number") {
    return null;
  }
  //   arr[index] = elem;
  arr.splice(index, 0, elem);
  return arr;
}

console.log(updateElem(arr3, 2, 3));
console.log(updateElem(arr3, 0, 5));
```

```
function deleteElem(arr, index) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.splice(index, 1);
}
```

console.log(deleteElem(arr3, 2));

### Q.4 Difference between Slice and Splice method

```
const arr4 = [8, 1, 0, 2, 3, 4];
const res = arr4.slice(1, 4);
console.log(res);

arr4.splice(index, 0, elem);
console.log(arr4)
```

### Q.5 Shallow copy and Deep Copy

### Q.6 Make Deep copy of array

```
let arr5 = [12, 45, 78, 98];
let tempArr = arr5; //Shallow copy;
tempArr[0] = 587;

let deepArr = [...arr5];
deepArr[1] = 879;
console.log(arr5);
```

### Q.7 concatenate two arrays

inbuild method conact

```
const arr6 = [5, 6, 7, 8, 9];
const arr7 = [9, 8, 6, 3, 6];
const result7 = arr7.concat(arr6);
console.log(result7);
```

```
function concatArray(arr1, arr2) {
  let result = [];
  for (let val of arr1) {
    result.push(val);
  }

  for (let val of arr2) {
    result.push(val);
  }
  console.log(result);
}

concatArray(arr6, arr7);
```

### Q.8 Check two arrays are equal

```
let arr8 = [5, 8, 9, 7, 3, 5];
let arr9 = [5, 8, 9, 7, 3, 5];

function isArrayEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

console.log(isArrayEqual(arr8, arr9));
console.log(isArrayEqual(arr8, arr7));
```

### Q.9 Sort array in Ascending and Descending order

```
const arr10 = [5, 8, 9, 4, 6, 7];
arr10.sort((a, b) => a - b);
console.log(arr10);
arr10.sort((a, b) => b - a);
console.log(arr10);
```

### Q.10 Reverse an array

inbuilt method

```
const arr11 = [5, 8, 9, 3, 0, 4, 6];
arr11.reverse();
console.log(arr11);
```

custom method

```
function arrReverse(arr) {
  let len = arr.length;
  for (let i = 0; i < parseInt(len / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[len - i - 1];
    arr[len - i - 1] = temp;
  }
  console.log(arr);
}

arrReverse(arr12);
```

### Q.11 map, filter, find,every and reduce methods

```
let arr13 = [5, 4, 6, 8, 3, 2, 1];

const mappedArr = arr13.map((item, index) => item + index);

const filteredArr = arr13.filter((item, index) => index % 2);

const findArr = arr13.find((item) => item === 2);

const reducedResult = arr13.reduce((acc, item) => acc + item, 0);

console.log(mappedArr);
console.log(filteredArr);
console.log(findArr);
console.log(reducedResult);
```

### Q.12 Flattening the array

```
let flattendResultArr = [];

function flatArr(arr) {
  if (!Array.isArray(arr)) {
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatArr(arr[i]);
    } else {
      flattendResultArr.push(arr[i]);
    }
  }
}

flatArr(arr14);
console.log(flattendResultArr);
```
