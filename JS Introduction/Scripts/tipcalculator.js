//Task 6

// Create variables for the pre-tip total and the tip percentage
// Calculate the new total
// Output a sentence to the page - something like:
// Your total bill, with tip, is £35.45
// BONUS POINTS:
// Use toFixed() to round the output to 2 decimal places
// Display the tip amount in the output as well

var preTipTotal = 30;
var tipPercentage = 10;
var tip = tipPercentage/100 * preTipTotal;
var total = preTipTotal + tip;
var message = "Your total bill, with tip is £" + total.toFixed(2)

console.log(message)