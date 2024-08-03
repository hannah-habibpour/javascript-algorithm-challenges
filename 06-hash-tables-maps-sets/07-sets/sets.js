const nameSet = new Set(["John", "Jane", "Joe"]);

// Add to set
nameSet.add("Jack");
nameSet.add("Jill");

// Check for values
nameSet.has("Jack"); // true
nameSet.has("Brad"); //false

// Get size
nameSet.size; // 5

// Get values
nameSet.values(); // show values in obj form

// Iterate
for (const name of nameSet) {
  console.log(name);
}

// convert to array
const nameArray = [...nameSet];
console.log(nameArray);

// Clear set
nameSet.clear();
console.log(nameSet.size);
