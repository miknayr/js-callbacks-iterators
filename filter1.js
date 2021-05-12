let people = [
	{
		name: "Bob",
		coolnessScore: 23
	},
	{
		name: "Jen",
		coolnessScore: 40
	},
	{
		name: "James",
		coolnessScore: 15.6
	},
	{
		name: "Isolde",
		coolnessScore: 17
	}
];

// (1) Write code that uses the filter function, and the below isCool function to return a list of people who are cool.

// let isCool = person => person.coolnessScore > 20

// Your code goes here

let isCool = people.filter(function (e) {
    return e.coolnessScore > 20;
});
console.log(isCool);



// using the variable "isCool" to parse the information set "people"
// people.filter is utilizing a function titled "e" and its filtering
// people based on their coolness score thats greater than 20.
