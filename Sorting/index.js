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
  console.log(arr);
}

console.log(insertionSort([7, 6, 2, 6, 1]));
