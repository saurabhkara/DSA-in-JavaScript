// Q.1 Deep Copy and Shallow Copy

//Shallow Copy
const obj1 = {
  name: "Saurabh",
  city: "Ara",
};
const obj2 = obj1;
obj2["name"] = "Saurabh Kumar";
console.log(obj1, obj2);

//Deep Copy
const obj3 = Object.assign({}, obj1);
obj3["name"] = "Ram";
console.log(obj1, obj3);

// Q.2 hasOwnProperty() method

console.log(obj3.hasOwnProperty("name"));

// Q.3 Object.assign() method
//Object.assign method is used to deep copy of object except nested object

let obj4 = {
  name: "Krishna",
  address: {
    street: "Ramgadhiya",
    city: "Ara",
  },
};

const obj5 = Object.assign({}, obj4);
obj5.address.city = "Patna";
console.log(obj4, obj5);

// Q.4 Difference between freeze and seal method
// Using freeze method, we cannot add or update properties of object.

Object.freeze(obj1);
obj1.profession = "Software developer";
console.log(obj1);

Object.seal(obj3);
obj3.salary = "455";
obj3.city = "Mathura";
console.log(obj3);

// Q.5 Object.isFrozen() method

console.log(Object.isFrozen(obj1));
console.log(Object.isFrozen(obj3));

// Q.6 Object.isSealed() method

console.log(Object.isSealed(obj3));

// Q.7 for...in loop for object

const obj6 = {
  name: "Saurabh",
  city: "Ara",
  pincode: 802301,
};

for (let key in obj6) {
  console.log(key, ":", obj6[key]);
}
// Q.8 Object.keys() , Object.values() and Object.entries();

console.log(Object.keys(obj6));
console.log(Object.values(obj6));
console.log(Object.entries(obj6));

// Q.9 How to check two objects are equal
// Object.is()

console.log(Object.is(obj1, obj2));
console.log(Object.is(obj1, obj3));

// Q.10 Explain the concept of prototype and inheritence in JavaScript objects

// Q.11  Count the number of players
const data = {
  id: 1,
  name: ["P1", "P4"],
  next: {
    id: 2,
    name: ["P3"],
    next: {
      id: 3,
      name: ["P3", "P4", "P5"],
      next: {
        id: 4,
        name: ["P1", "P2", "P4"],
        next: {
          id: 5,
          name: ["P2", "P3", "P5"],
          next: null,
        },
      },
    },
  },
};

function countPlayer(data) {
  if (!data) {
    return;
  }
  let count = {};
  for (let player of data.name) {
    count[player] = (count[player] || 0) + 1;
  }
  const returnCount = countPlayer(data.next);
  for (let key in returnCount) {
    count[key] = (count[key] || 0) + returnCount[key];
  }
  return count;
}

console.log(countPlayer(data));

// Q.12 Number of good pairs
//Given an array of integers nums, return the number of good pairs.
// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

const pair = [1, 2, 3, 1, 1, 3];
const pair2 = [1, 1, 1, 1];
const pair3 = [1, 2, 3];

function calculatePairs(arr) {
  const pairsObj = {};

  for (let first = 0; first < arr.length - 1; first++) {
    for (let second = first + 1; second < arr.length; second++) {
      if (arr[first] === arr[second]) {
        let key = first + "" + second;
        pairsObj[key] = [first, second];
      }
    }
  }
  return Object.values(pairsObj).length;
}

console.log(calculatePairs(pair));
// console.log(calculatePairs(pair2));
// console.log(calculatePairs(pair3));

// Q.13 Count the Number of Consistent Strings
//You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.
//

const allowed = "ab";
const words = ["ad", "bd", "aaab", "baa", "badab"];

function consistentStr(allowed, words) {
  let cStr = {};
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    let flag = true;
    for (let j = 0; j < words[i].length; j++) {
      if (!allowed.includes(words[i][j])) {
        flag = false;
      }
    }
    if (flag) {
      cStr[words[i]] = (cStr[words[i]] || 0) + 1;
      count++;
    }
  }
  // console.log(cStr, count);
  return count;
}

console.log(consistentStr(allowed, words));

// Q.14 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

const nums = [2, 7, 11, 15];
const target = 9;
const nums2 = [3, 2, 4],
  target2 = 6;
function twoSum(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return -1;
}
console.log(twoSum(nums, target));
console.log(twoSum(nums2, target2));

//Q.15 Sum of Unique Elements

let arr2 = [1, 2, 3, 2];

function sumOfUnique(arr) {
  let obj = {};
  for (let elem of arr) {
    obj[elem] = (obj[elem] || 0) + 1;
  }
  console.log(obj);
  const unique = Object.keys(obj);
  let sum = 0;
  if (unique.length > 1) {
    for (let elem in obj) {
      if (obj[elem] === 1) {
        sum = sum + parseInt(elem);
      }
    }
  }
  return sum;
}

console.log(sumOfUnique(arr2));
console.log(sumOfUnique([1, 1, 1, 1, 1]));

// Q.16 Unique Number of Occurrences
// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

const arr3 = [1, 2, 2, 1, 1, 3];

function uniqueOccuurance(arr3) {
  const occuranceObj = {};
  for (let item of arr3) {
    occuranceObj[item] = (occuranceObj[item] || 0) + 1;
  }
  const uniqueArr = Object.values(occuranceObj);
  const uniqueSet = new Set(uniqueArr);
  const finalArr = [...uniqueSet];
  return finalArr.length === uniqueArr.length;
}

console.log(uniqueOccuurance(arr3));
console.log(uniqueOccuurance([1, 2]));

// Q.17 Integer to Roman

const romanMap = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

function convertRoman(num) {
  let roman = "";
  let temp = num;
  for (let key in romanMap) {
    while (temp >= romanMap[key]) {
      roman = roman + key;
      temp = temp - romanMap[key];
    }
  }
  console.log(roman);
}

// console.log(convertRoman(52));
// console.log(convertRoman(5200));

// Q.18 Longest Substring Without Repeating Characters
// Brute force

function bruteForceLongestSubstring(str) {
  let max = 0;
  let finalStr = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      const substr = str.substring(i, j + 1);
      if (checkUniqueChar(substr)) {
        const leng = substr.length;
        if (leng >= max) {
          max = leng;
          finalStr = substr;
        }
      }
    }
  }
  console.log(finalStr);
  return max;
}

function checkUniqueChar(str) {
  let obj = {};
  for (let char of str) {
    obj[char] = obj[char] + 1 || 1;

    if (obj[char] !== 1) {
      return false;
    }
  }

  return true;
}

console.log(bruteForceLongestSubstring("saurabh"));

//Optimized way using array
console.log("-----------------");

function longestSubstringUsingArray(str) {
  const currentStr = [];
  let maxLength = 0;

  for (let i = 0; i < str.length; i++) {
    const isExist = currentStr.indexOf(str[i]);
    if (isExist !== -1) {
      currentStr.splice(0, isExist + 1);
    }
    currentStr.push(str[i]);
    maxLength = Math.max(maxLength, currentStr.length);
  }
  return maxLength;
}

console.log(longestSubstringUsingArray("saurabh"));

// Sliding window using set

function longestSubstringUsingSet(str) {
  if (!str) {
    reurn;
  }

  let start = 0;
  let end = 0;
  let maximumLength = 0;

  let set = new Set();
  while (end < str.length) {
    if (set.has(str[end])) {
      set.delete(str[start]);
      start++;
    } else {
      set.add(str[end]);
      end++;
      maximumLength = Math.max(maximumLength, set.size);
    }
  }

  return maximumLength;
}

console.log(longestSubstringUsingSet("Saurabh"));

// Q. Group Anangram

let arrStrs = ["eat", "tea", "tan", "ate", "nat", "bat"];

//Brute force approach

function groupAnangramByBruteForce(arrStr) {
  let final = {};
  let arr = new Array(arrStr.length).fill(0);
  for (let i = 0; i < arrStr.length; i++) {
    if (!arr[i]) {
      final[i] = [arrStr[i]];
      arr[i] = 1;
    }
    for (let j = i + 1; j < arrStr.length - 1; j++) {
      if (arr[j]) {
        continue;
      } else {
        if (isAnagram(arrStr[i], arrStr[j])) {
          final[i].push(arrStr[j]);
          arr[j] = 1;
        }
      }
    }
  }
  // console.log(final);
  return Object.values(final);
}

function isAnagram(str1, str2) {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log(groupAnangramByBruteForce(arrStrs));
console.log(groupAnangramByBruteForce([""]));
console.log(groupAnangramByBruteForce(["a"]));
