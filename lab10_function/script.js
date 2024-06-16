/**
 * Abeha Choudhry
 * June 15, function and object
 */
console.log("Abeha Choudhry")
// function to print something
function msg(){
    console.log("Hello World!")
}

// function to print numbers from 1 to 3, inclusive
function printcount(){
    for( let x = 1; x<= 3; x++){
        console.log(x)
    }
}

// function that passes a name as argument
function greeting(name) {
    console.log(`Welcome to Javascript ${name} `);
}

// function that passes multiple arguments
function fullname(firstname, lastname) {
    console.log(`Welcome to JS ${firstname} ${lastname[0]}`); // lastname[0] to print the first character of the lastname
}

let firstname = "Martha"
let lastname = "Smith"

fullname(firstname,lastname)

// function without parameters but returns a value
function sumxy(){
    let x = 10
    let y = -2
    return x + y
    // any line after the first return will not be executed
    x = x + 2
    y = y + 5
    return x + y
}

// function with parameters and returns a value
function sum(x,y){
    return x + y
}

// calling sum()
let s = sum (5,10)
console.log(`The sum is ${s}`)

// function check if a number is positive
function checkpositive(number) {
    if (number > 0){
        return true
    } else {
        return false
    }
}

// call the function
let n = 2
let check = checkpositive(n)
console.log(`is number ${n} positive? ${checkpositive(n)}`);

// save function in a variable 
/* 
function addition(num1, num2){
    return num1+num2
}
*/
const addition = function (num1, num2){
    return num1 + num2
}
 
/* 
// regular variable function
consst product = function addition(num1, num2){return num1 * num2}
*/
// ARROW FUNCTION
const product = (num1, num2) => {return num1 * num2}

// ANONYMOUS FUNCTION
(
    function(){
        console.log("This is an anonymous function")
    }
)();

(
    ()=>{console.log("This is an anonymous funcyion using arrow")}
)();

//OBJECT
/* real-world objects are all around us, and they each have attributes and behaviors that can describe
- attributes describe the features that an onject has.
- behaviors describe actions that an object can perform.
*/
// car is the object
let car ={
    //attributes (properties)
    make:"Jeep",
    year:2021,
    model:"Wrangler",
    startmileage : 10,
    endmileage: 50,

    //behaviors (methods, function)
    accelerate : function(){return this.model},
    brake: function(){return this.make},
    distancetravel: function(){return this.endmileage - this.startmileage}
}

// add a method 'start' to the car object
car.start = function(){
    return `${this.make} ${this.model} is running`
}

// add a property 'price'
car.price = 32000