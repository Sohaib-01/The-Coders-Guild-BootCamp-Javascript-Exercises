/*console.log("test ");

function writeSentence() {
    //INSERT CODE HERE;
}

writeSentence();

console.log("Task 1 Above");
console.log("----------");*/

// Task 1 done below

function greet(name) {
  console.log(`Hello and welcome ${name}!`);
};

greet("Sohaib");


/*Task 2
function combineNAmes() {
    var firstName = "First";
    var lastName = "Last";
    console.log(firstName + lastName)
}*/

/*function percentageCalculator(number, percentage) {
    let calculatedPercentage = number * percentage / 100;
    return calculatedPercentage;
}

console.log(percentageCalculator(2, 50));*/

// Task 2 & 3 done below

function fullName(firstName, lastName){
  return `${firstName} ${lastName}`;
};

let combinedName = fullName("Sohaib", "Akhtar");
console.log(combinedName);

// Task 4 done below

let temperature = 20;

if (temperature < 0) {
    console.log("Stay inside!");
} else if (temperature > 10 && temperature < 20){
    console.log("Wear a very warm coat and a hat!");
} else if (temperature < 30) {
    console.log("Wear a coat and a hat!");
} else if (temperature < 50) {
    console.log("Wear a coat!");
} else {
    console.log("Just pants and a vest is fine.");
}