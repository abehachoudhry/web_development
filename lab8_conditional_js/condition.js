console.log("Abeha Choudhry")
console.log(" ==== Example 1: if statement ==== ")
let day = true;

if(day){
    console.log("Good Morning!")
}
console.log(" ==== Example 2: if-else statement ==== ")
let n1 = 8, n2 = 10

if(n1 === n2) { // three equal signs make sure it's exactly equal
    console.log("They are equal")
}
else{
    console.log("They are different ")
}

console.log(" ==== Example 3: multiway condition statement ==== ")
// check if number is positive, negative, or zero
let number = "%"
if(number < 0){
    console.log(`Number ${number} is negative`)
}
else if(number === 0){
    console.log("The number is zero")
}
else{
    console.log(`${number} is undefined! `)
}

console.log(" ==== Example 4: multiway condition statement in prompt function ==== ")
// check if user enters a number, didn't enter anything, or pressed cancel button
let n = prompt("Enter a number: ")

if(n === null){
    console.log("Cancel button was pressed")
}
else if(n === ""){
    console.log("Ok button was pressed")
}
else if(isNaN(n)){
    console.log(`${n} is a string`)
}
else{
    console.log(`${n} is a number`)
}

console.log(" ==== Example 5: nested conditional statement ==== ")
// check is a password has at least 6+ characters and no space
let password = prompt("Enter a password")


// to find the number of characters in a string, we use the method, length
if(password.length >= 6){
    console.log(`Password ${password} has ${password.length}`)
    if(password.indexOf(" " === -1)) {
        console.log(`Password ${password} DOESN"T HAVE SPACE`)
    }
    else{
        console.log(`Password ${password} HAS SPACE`)
    }
}
else{
    console.log(`Password ${password} has less than 6 characters`)
}

console.log(" ===== Excercise 1 ==== ")
let x = prompt("Enter a number: ")

if(x <= 0){
    console.log(`${x} is a negative number`)
}
else if(x >=0){
    console.log(`${x} is a positive number`)
}
else if(isNaN(x)){
    console.log(`${x} is a string`)
}

let colors =["yellow","magenta", "red", "olive", "orange", "babyblue", "hotpink" ]
// all lisr has an index number that starts with 0, (leftmost)
console.log(`The thhird color is ${colors[2]})`)

let selectcolor = prompt ("Example 6: Select a color using an index number")

switch (selectcolor) {
    case `0`:
        console.log(`Selected color = ${colors[0]}`)
        break
    case `1`:
        console.log(`Selected color = ${colors[1]}`)
        break
    case `2`:
        console.log(`Selected color = ${colors[2]}`)
        break
    case `3`:
        console.log(`Selected color = ${colors[3]}`)
        break
    case `4`:
        console.log(`Selected color = ${colors[4]}`)
        break
    default:
        console.log("Color is not in the list")
}

console.log(" ==== Example 7: string ===== ")
let greeting = "Good Evening"
console.log(`The seventh character is ${greeting[6]}`)