//**Arithmetic, Comparison, Logical Operators:**
function performOperations(num1, num2) {
    // Calculate the sum
    var addition = num1 + num2;
    
    // Calculate the difference
    var subtraction = num1 - num2;
    
    // Calculate the product
    var multiplication = num1 * num2;
    
    // Check if num2 is not zero to avoid division by zero
    if (num2 !== 0) {
        // Calculate the quotient
        var division = num1 / num2;
    } else {
        var division = "Division by zero is not defined";
    }
    
// Return the results as an object
    return {
        sum: addition,
        difference: subtraction,
        product: multiplication,
        quotient: division
    };
}

// Example usage:
var num1 = 10;
var num2 = 5;
var result = performOperations(num1, num2);
console.log("Sum:", result.sum);
console.log("Difference:", result.difference);
console.log("Product:", result.product);
console.log("Quotient:", result.quotient);






// number 2
function compareNumbers(num1, num2) {
    return num1 === num2;
}

// Example usage:
var num1 = 10;
var num2 = 5;
var result = compareNumbers(num1, num2);

console.log(result); // This will output "false" because num1 (10) is not equal to num2 (5).






// number 3
function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// Example usage:
var num = 7;
var result = isEvenOrOdd(num);
console.log(result); // This will output "Odd" because 7 is an odd number.





// **Ternary Operator:**
function checkEvenOrOdd(number) {
    var result = (number % 2 === 0) ? "Even" : "Odd";
    return result;
}

// Example usage:
var num = 6;
var result = checkEvenOrOdd(num);
console.log(result); // This will output "Even" because 6 is an even number.




//**Loops and Loop Control Statements:**
function printNumbers() {
        for (var i = 1; i <= 10; i++) {
        console.log(i);
    }
}




// number 9
var sum = 0;

for (var i = 1; i <= 100; i++) {
    // Check if the number is odd, and skip it using continue
    if (i % 2 !== 0) {
        continue;
    }

    // If the number is even, add it to the sum
    sum += i;
}

console.log("The sum of even numbers from 1 to 100 is:", sum);





// **Iterating through Arrays:**
// Declare an array of numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use a for loop to print each element of the array
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}




// number 11
function findLargestNumber(numbers) {
    if (numbers.length === 0) {
        return undefined; // Return undefined for an empty array
    }

    var largest = numbers[0]; // Initialize the largest number to the first element

    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    return largest;
}

// Example usage:
var numbersArray = [15, 6, 42, 8, 25];
var largestNumber = findLargestNumber(numbersArray);
console.log("The largest number is:", largestNumber); // This will print "The largest number is: 42"





// **Functions and Scope:**
function calculateTax(income) {
    if (income <= 10000) {
        return income * 0.10; // 10% tax
    } else if (income <= 50000) {
        return 10000 * 0.10 + (income - 10000) * 0.20; // 10% on first $10,000, 20% on the rest
    } else {
        return 10000 * 0.10 + 40000 * 0.20 + (income - 50000) * 0.30; // 10% on first $10,000, 20% on next $40,000, 30% on the rest
    }
}

// Example usage:
var income = 60000;
var taxAmount = calculateTax(income);
console.log("Tax amount for an income of $" + income + " is $" + taxAmount);





// **Arrays and Array Methods:**
// Create an array of fruits
var fruits = ["apple", "banana", "orange"];

// Function to add a new fruit to the end of the array
function addFruitToEnd(newFruit) {
    fruits.push(newFruit);
}

// Example usage:
addFruitToEnd("strawberry");

// Check the updated array
console.log(fruits); // This will print ["apple", "banana", "orange", "strawberry"]





// number 14
// Create an array of elements
var array = [1, 2, 3, 4, 5];

// Remove the last element using the pop method
array.pop();

// Display the updated array
console.log(array); // This will print [1, 2, 3, 4]





// **Objects and Object Methods:**
// Create a person object
var person = {
    name: "John Doe",
    age: 30,
    gender: "Male"
};

// Function to display the person's information
function displayPersonInfo(person) {
    console.log("Name: " + person.name);
    console.log("Age: " + person.age);
    console.log("Gender: " + person.gender);
}

// Call the function to display the person's information
displayPersonInfo(person);





// number 16
// Create a person object
var person = {
    name: "John Doe",
    age: 30,
    gender: "Male",
    
    // Method to increment age by one
    incrementAge: function() {
        this.age += 1;
    }
};

// Function to display the person's information
function displayPersonInfo(person) {
    console.log("Name: " + person.name);
    console.log("Age: " + person.age);
    console.log("Gender: " + person.gender);
}

// Call the displayPersonInfo function to display the initial information
console.log("Initial information:");
displayPersonInfo(person);

// Call the incrementAge method to increment the age
person.incrementAge();

// Call the displayPersonInfo function again to display the updated information
console.log("\nAfter incrementing age:");
displayPersonInfo(person);







// **let` and `const` Scoping:**
// Using let to declare a variable that allows reassignment
let mutableVar = 10;
console.log("Initial value of mutableVar:", mutableVar);

// Reassigning the value of the variable declared with let
mutableVar = 20;
console.log("Updated value of mutableVar:", mutableVar);

// Using const to declare a variable that does not allow reassignment
const immutableVar = 30;
console.log("Initial value of immutableVar:", immutableVar);

// Attempting to reassign the value of the variable declared with const (will result in an error)
try {
    immutableVar = 40; // This will throw an error
} catch (error) {
    console.log("Error:", error.message);
}