let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Square each number in the array
// Filter the resulting array by numbers larger than 30
// For each remaining element, print a string declaring it larger than 30
// e.g. "36 is larger than 30"

//Your code here

let square = numbers.map(num => num * num);
let largerThanThirty = square.filter(num => num > 30);
largerThanThirty.forEach(num => console.log(`${num} is larger than 30`));

// same result as 

let square = numbers.map(num => num * num).filter(num => num > 30).forEach(num => console.log(`${num} is larger than 30`));



// line 10: setting square to create square'd versions of each number, were mapping them as squares in this variable
// line 11: creating a function for filtering numbers that are greater than 30