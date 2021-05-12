
// (1) Use the .forEach iterator to loop over the following array of foods and say you like them.

// The output should be
// > "I like pizza"
// > "I like tacos"
// > "I like ice cream"
 
let foods = ["pizza", "tacos", "ice cream", "sushi"];

// your code here


// within the array set is foods, using .forEach, were logging everything that is inside the foods array using 
foods.forEach(foods => console.log(`${foods} is delicious!!`));




//for loop, choosing within the set of foods, identifier is the argument and we are searching for all the arguments in the array
for(let identifier of foods){
	console.log(`second choice ${identifier}!`)
}