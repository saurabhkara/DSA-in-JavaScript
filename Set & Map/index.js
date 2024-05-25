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
