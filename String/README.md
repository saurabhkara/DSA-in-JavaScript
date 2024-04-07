## JavaScript String question

### 1. charAt() method

```
let str1 = "Saurabh";
console.log(str1.charAt(2));
```

### 2. charCodeAt() method

```
console.log("A".charCodeAt());
```

### 3. includes() method

```
let str1 = "Saurabh";
console.log(str1.includes("a"));
```

### 4. indexOf() and lastIndexOf() method

```
let str1 = "Saurabh";
console.log(str1.indexOf("S"));
console.log(str1.lastIndexOf("a"));
```

### Q.5 localeCompare() method

if equals returns 0 else -1

```
let str2 = "Saurabhi";
let str1 = 'Saurabh';
console.log(str1.localeCompare(str2));
```

### Q.6 substrings() and slice() methods

Difference in both is slice method can take negative index too

```
let str1 = 'Saurabh';
console.log(str1.substring(2));
console.log(str1.substring(2, 6));
console.log(str1.slice(2, 6));
console.log(str1.slice(-4, -1));
```

### Q.7 trim(), trimEnd() and trimStart() methods

```
let str3 = "    Saurabh is good JavaScript developer   ";
console.log(str3.trim());
console.log(str3.trimEnd());
console.log(str3.trimStart());
```

### Q.8 toUpperCase() , toLowerCase() methods

```
const str1='Saurabh';
console.log(str1.toLowerCase());
console.log(str1.toUpperCase());
```

### Q.9 Stringify the object

```
const obj = {
  name: "Saurabh",
};

console.log(obj);
console.log(JSON.stringify(obj));
```

### Q.10 replace() and replaceAll() methods

```
const str4 = "I Saurabh is best react native developer. Yes, Saurabh";
console.log(str4.replace("Saurabh", "Saurya"));
console.log(str4.replaceAll("Saurabh", "Saurya"));
```

### Q.11 Find the index of first occurance in string

```
function returnFirstOccuranceIndex(str, searchStr) {
  let len1 = str.length;
  let len2 = searchStr.length;

  for (let i = 0; i < len1 - len2 + 1; i++) {
    let subs = str.substring(i, i + len2);
    if (subs === searchStr) {
      return i;
    }
  }
  return -1;
}
console.log(returnFirstOccuranceIndex(str4, "Saurabh"));
```

### Q.12 Reverse the string

```
function reverseString(str) {
  let len = str.length - 1;
  let result = "";
  while (len >= 0) {
    result = result + str[len];
    len--;
  }
  return result;
}
console.log(reverseString("saurabh"));
console.log(reverseString("RadhaRani"));
```

### Q.13 Check given two strings are Anagram

```
let str5 = "RAMARAMAA";
let str6 = "RAMAMARA";

function checkAnagram(str1, str2) {
  let len1 = str1.length;
  let len2 = str2.length;
  if (len1 !== len2) {
    return false;
  }
  let obj = {};

  for (let char of str1) {
    obj[char] = obj[char] ? obj[char] + 1 : 1;
  }
  for (let char of str2) {
    if (obj[char]) {
      obj[char] = obj[char] - 1;
    } else {
      return false;
    }
  }
  return true;
}

console.log(checkAnagram(str5, str6));
```

### Q.14 Longest common prefix in array of string

```
const arr7 = ["RamaRama", "Rama", "Ram"];

function commonPrefixUntil(str1, str2) {
  let len1 = str1.length;
  let len2 = str2.length;
  let prefix = "";
  for (let i = 0, j = 0; i < len1 && j < len2; i++, j++) {
    if (str1[i] !== str2[j]) {
      break;
    }
    prefix = prefix + str1[i];
  }
  return prefix;
}

function commonPrefix(arr) {
  let result = arr[0];

  for (let i = 1; i < arr.length; i++) {
    result = commonPrefixUntil(arr[i], result);
  }
  return result;
}

console.log(commonPrefix(arr7));

```

### Q.15 Merge the strings by adding alternative letter.

```
let str7 = "Ram";
let str8 = "Sita";

function mergeAlternate(str1, str2) {
  let len1 = str1.length;
  let len2 = str2.length;
  let result = "";
  let i = 0;
  let j = 0;
  while (i < len1 || j < len2) {
    if (i < len1) {
      result = result + str1[i];
      i++;
    }
    if (j < len2) {
      result = result + str2[j];
      j++;
    }
  }
  return result;
}

console.log(mergeAlternate(str7, str8));
```

### Q.16 Lenghth of last word in string

```
const str9 = "Saurabh is best javascript developer";

function lastWordLength(str) {
  let wordArr = str.split(" ");
  let len = wordArr.length;
  return wordArr[len - 1].length;
}

console.log(lastWordLength(str9));
```

### Q.17 Valid Palindrome, After converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters

```
let str10 = "ramram2marmar2*7";

function validPalindrom(str) {
  let validStr = "";

  for (let char of str.toLowerCase()) {
    if (
      char.charCodeAt() >= "a".charCodeAt() &&
      char.charCodeAt() <= "z".charCodeAt()
    ) {
      validStr = validStr + char;
    }
  }

  let len1 = validStr.length - 1;
  for (let i = 0; i < len1; i++) {
    if (validStr[i] !== validStr[len1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(validPalindrom(str10));
```

### Q.18 Reverse the vowel of string

```
let str11 = "SaurabhKumari";

function isVowel(char) {
  if (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u"
  ) {
    return true;
  }
  return false;
}

function reverseVowel(str) {
  let vowel = "";
  let final = "";
  for (let char of str) {
    if (isVowel(char)) {
      vowel = char + vowel;
    }
  }
  let i = 0;
  for (let char of str) {
    if (isVowel(char)) {
      final = final + vowel[i++];
    } else {
      final = final + char;
    }
  }
  console.log(vowel);
  return final;
}

console.log(reverseVowel(str11));
```

### Q.19 Reverse the words of string

```
function reverseWords(str) {
  let final = "";
  let arrStr = str.split(" ");
  for (let i = arrStr.length - 1; i >= 0; i--) {
    final = final + arrStr[i] + " ";
  }
  return final;
}

console.log(reverseWords(str4));
```
