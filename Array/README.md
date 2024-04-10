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

###
