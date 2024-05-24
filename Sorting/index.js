console.log("Sorting Algorithm");

// Q.1 Bubble Sort
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

// Q.2 Selection Sort

function selectionSort(arr) {
  if (!Array.isArray(arr)) {
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    let max = 0;
    let j;
    for (j = 1; j < arr.length - i; j++) {
      if (arr[j] > arr[max]) {
        max = j;
      }
    }

    let temp = arr[max];
    arr[max] = arr[j - 1];
    arr[j - 1] = temp;
  }
  return arr;
}

console.log(selectionSort([7, 6, 2, 6, 1]));

// Q.3 Insertion Sort

function insertionSort(arr) {
  if (!Array.isArray(arr)) {
    return;
  }

  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let temp = arr[i];
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
}

console.log(insertionSort([7, 6, 2, 6, 1]));

// Q.4 Quick sort

function quickSort(arr) {
  const pivot = Math.floor(Math.random() * arr.length);
  if (arr.length < 2) {
    return arr;
  }
  const leftArr = [];
  const rightArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[pivot]) {
      continue;
    }
    if (arr[i] < arr[pivot]) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  return [...quickSort(leftArr), arr[pivot], ...quickSort(rightArr)];
}

console.log(quickSort([5, 8, 7, 6, 9]));

// Quicksort without extra memory

function partition(arr, left, right) {
  let pivot = arr[right];
  let j = left - 1;
  for (let i = left; i < right; i++) {
    if (arr[i] < pivot) {
      j++;
      let temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
  }
  j++;
  arr[right] = arr[j];
  arr[j] = pivot;
  return j;
}

function quickSortWithoutExtraMemory(arr, left, right) {
  if (left < right) {
    const pivot = partition(arr, left, right);
    console.log("pivot", pivot);
    quickSortWithoutExtraMemory(arr, left, pivot - 1);
    quickSortWithoutExtraMemory(arr, pivot + 1, right);
  }
  return arr;
}

console.log(quickSortWithoutExtraMemory([5, 8, 6, 4, 3], 0, 4));

// Merge Sort

function mergeSort(arr) {}
