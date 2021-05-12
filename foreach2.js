// Use the .forEach iterator to loop over the following array of objects and say how delicious each one is.
// The output should be
// > Pizza is very delicious
// > Tacos is mostly delicious
// > Cottage Cheese is not very delicious

let foods = [
  {name: "Pizza", level: "very"},
  {name: "Tacos", level: "mostly"},
  {name: "Cottage Cheese", level: "not very"}
];

// your code here
foods.forEach(item => console.log(`${[item.name]} is ${item.level} delicious!!`));

// foods is the variable group, forEach filters it out, 
// calling on foods as the set, 
// we log foods.name as one set of strings, and then we log foods.level the second set of strings



