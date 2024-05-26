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

const weekmap = new WeakMap();
weekmap.set({ name: "saurabh" }, "mehjsaj");
console.log(weekmap);

// Set in javaScript
