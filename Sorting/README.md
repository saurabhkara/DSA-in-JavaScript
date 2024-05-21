## Sorting Algorithm

### Q.1 Bubble Sort

```
function bubbleSort(arr) {
  if (!Array.isArray(arr)) {
    rerurn;
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([4, 1, 3, 2, 5]));

```

Time Complexity = O(n2)

### Q.2 Selection Sort
