//A Map holds key-value pairs where the keys can be any datatype.

// Q.1 Map in JavaScript
const map = new Map();
map.set("name", "Saurabh");
map.set(true, function () {
  console.log("RRR");
});
map.get(true)();

console.log(map);
// map.delete("name");
console.log(map);
map.forEach((item) => console.log(item));

// Q.2 Sort the characters by freequency

const str = "tree";

function sortCharacterbasedOnOccurance(str) {
  const map = new Map();
  for (let char of str) {
    if (map.has(char)) {
      map.set(char, (map.get(char) || 0) + 1);
    } else {
      map.set(char, 1);
    }
  }

  const sortedArr = [...map.keys()].sort((a, b) => map.get(b) - map.get(a));
  let result = "";
  for (let ch of sortedArr) {
    result += ch.repeat(map.get(ch));
  }
  return result;
}

console.log(sortCharacterbasedOnOccurance(str));

// Q.3 Map vs Object
//Map is faster than object.

// Q.4 Map vs WeekMap
// A WeakMap is a collection of key/value pairs whose keys must be objects.

let sampleObj = { name: "saurabh" };

const map2 = new Map();
map2.set(sampleObj, "ssss");
const weekmap = new WeakMap();
weekmap.set(sampleObj, "ssss");
console.log(weekmap, map2);

sampleObj = null; //sampleObj made null;

console.log(weekmap, map);

//Q.5  Set in javaScript

const set = new Set();

set.add(7);
set.add(6);

console.log(set);
for (let x of set) {
  console.log(x);
}

// Q.6 Find unique value in array

const arr = [1, 1, 8, 6, 7, 5, 6, 5, 4, 3, 3];
console.log(new Set(arr));

// Q.7 Intersection of two arr

let arr1 = [4, 5, 6, 8, 9, 3, 6];
let arr2 = [6, 8, 7, 9, 3, 5];

function findIntersesction(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const set3 = new Set();

  for (let item of set1) {
    if (set2.has(item)) {
      set3.add(item);
    }
  }

  return [...set3];
}

console.log(findIntersesction(arr1, arr2));

// Q.8 Longest Consecutive sequence

function longestconsectiveSequence(arr) {
  const set = new Set(arr);
  const uniqueArr = [...set];
  uniqueArr.sort((a, b) => a - b);
  console.log(uniqueArr);

  let length1 = 1;
  for (let i = 1; i < uniqueArr.length; i++) {
    if (uniqueArr[i - 1] + 1 !== uniqueArr[i]) {
      break;
    }
    length1++;
  }
  return length1;
}

console.log(longestconsectiveSequence([0, 0, 1, 5, 6, 7, 8, 2, 3]));

// Q.9
