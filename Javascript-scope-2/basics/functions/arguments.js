// Multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

============================================================================================================

// Deafult arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
    return 'Name: ' + name + ' - Score: ' + score
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

============================================================================================================

// Challenge area
let getTip = function (total, tipPercent = .2) {
    return total * tipPercent
}

let tip = getTip(40, .25)
console.log(tip)

============================================================================================================

    //totalBill tipPercent MY ORIGINAL VERSION OF THE CODE (ERRONEOUS VERSION)
let getBill = function (totalBill = $45, tipPercent = 20%) {
	return 'TotalBill:' + totalBill + '- TipPercent' + tipPercent
}

let bill = getBill($100, 20%)
console.log(bill)


// Define the function to calculate the bill (CORRECTED VERSION)
let getBill = function (totalBill = 45, tipPercent = 0.2) {
    let tipAmount = totalBill * tipPercent;
    let finalBill = totalBill + tipAmount;
    return 'Total Bill: $' + finalBill.toFixed(2) + ' - Tip Percent: ' + (tipPercent * 100) + '%';
}

// Call the function with custom values
let bill = getBill(100, 0.2); // totalBill = 100, tipPercent = 20%
console.log(bill);



// Here's what I changed:

// Removed the $ symbol from the default value of totalBill, as it's not needed here. In JavaScript, you don't specify currency symbols in variable declarations.
// Changed the default value of tipPercent to 0.2, which represents 20% as a decimal.
// Calculated the tip amount and the final bill inside the function.
// Used toFixed(2) to ensure the final bill is formatted with two decimal places.
// Corrected the string concatenation in the return statement.



