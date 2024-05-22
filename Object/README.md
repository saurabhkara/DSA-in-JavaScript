## Object in JavaScript

### Q.1 Deep Copy and Shallow Copy

Shallow Copy

```
const obj1 = {
  name: "Saurabh",
  city: "Ara",
};

const obj2 = obj1;
obj2["name"] = "Saurabh Kumar";
console.log(obj1, obj2);
```

Deep Copy

```
const obj3 = Object.assign({}, obj1);
obj3["name"] = "Ram";
console.log(obj1, obj3);
```

### Q.2 hasOwnProperty() method

```
console.log(obj3.hasOwnProperty("name"));
```

### Q.3 Object.assign() method

Object.assign method is used to deep copy of object except nested object

```
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

```

### Q.4 Difference between freeze and seal method

Using freeze method, we cannot add or update properties of object.

Object.seal() allows changes to the existing properties of an object. It prevents from deletion of existing properties but cannot prevent them from external changes.

```
Object.freeze(obj1);
obj1.profession = "Software developer";
console.log(obj1);

Object.seal(obj3);
obj3.salary = "455";
obj3.city = "Mathura";
console.log(obj3)
```

### Q.5 Object.isFrozen() method

```
console.log(Object.isFrozen(obj1));
console.log(Object.isFrozen(obj3));

```

### Q.6 Object.isSealed() method

```
console.log(Object.isSealed(obj3));
```

### Q.7 for...in loop for object

```
const obj6 = {
  name: "Saurabh",
  city: "Ara",
  pincode: 802301,
};

for (let key in obj6) {
  console.log(key, ":", obj6[key]);
}
```

### Q.8 Object.keys() , Object.values() and Object.entries();

```
console.log(Object.keys(obj6));
console.log(Object.values(obj6));
console.log(Object.entries(obj6));
```

### Q.9 How to check two objects are equal

Object.is() method used

```
console.log(Object.is(obj1, obj2));
console.log(Object.is(obj1, obj3));
```

### Q.10 Explain the concept of prototype and inheritence in JavaScript objects

### Q.11 Count the number of players

```
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

```
