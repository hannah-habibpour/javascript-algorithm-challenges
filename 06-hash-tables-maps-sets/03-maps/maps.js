const nameMap = new Map([
  [1, "john"],
  [2, "jack"],
  [3, "Jill"],
]);

const myFunction = () => {};
const myObj = {};

const map2 = new Map([
  ["name", "John"],
  [1, "number one"],
  [true, "really true"],
  [null, null],
  [myFunction, "my function"],
  [myObj, "my object"],
]);

// Get values
console.log(nameMap.get(1));
console.log(map2.get(myFunction));

// Set value
nameMap.set(4, "Mike");

// Check values
console.log(nameMap.has(10));

// Remove values
nameMap.delete(1);

// get size
console.log(nameMap.size);

// iteratig over a map
for (let [key, value] of nameMap) {
  console.log(key, value);
}

// get values
console.log(nameMap.values());

// clear map
nameMap.clear();

console.log(nameMap);
