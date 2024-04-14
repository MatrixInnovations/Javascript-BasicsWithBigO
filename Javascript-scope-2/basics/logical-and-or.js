let temp = 55

// Logical And Operator - True if both sides are true. False otherwise
// Logical Or Opeartor - True if at least one side is true. False otherwise

if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice out')
} else if (temp <= 0 || temp >= 120) {
    console.log('Do not go outside')
} else {
    console.log('Eh. Do what you want')
}

// Challenge area 

let isGustOneVegan = true    // O(1)
let isGustTwoVegan = false   // O(1)

// Are both vegan? - Only offer up vegan dishes
// At least one vegan? - Make sure to offer up some vegan options. 
// Else, Offer up anything on the menu



if (isGustOneVegan && isGustTwoVegan) {    // O(1)
	console.log('Only offer up vegan dishes')    // O(1)
} else if (isGustOneVegan || isGustTwoVegan) {    // O(1)
	console.log('Make sure to offer up some vegan options')    // O(1)
} else {    // O(1)
	console.log('Offer up anything on the menu')    // O(1)
}


The big O of the code above is O(1) this is constant time complexity. 

In terms of time complexity, constant time complexity (O(1)) represents the fastest possible execution 
time for an algorithm. It means that the algorithm's runtime does not grow with the size of the input.

This is because the time taken to execute the algorithm remains constant, regardless of the size of the 
input. In other words, the algorithm takes the same amount of time to complete its execution, regardless 
of whether the input size is small or large.




