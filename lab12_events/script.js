/**
 * Monday, June 17: events in JS
 * Abeha Choudhry
 */

// onclick
// step 1: find and save the element that we want to apply an event
let btn1 = document.querySelector(".btn1")
// step 2: bound the click event to btn1
btn1.onclick = function(){
    alert("HEY THERE!")
}

// onmouseover
document.querySelector(".linkqcc").onmouseover = ()=>{
    alert("QCC LINK WAS TOUCHED")
}

// change color div
// step 1: collect the elements
let colorcontainer = document.querySelector(".colorcontainer")
let btncolor = document.querySelector(".btncolor")

btncolor.addEventListener("click", function(){
    colorcontainer.style.backgroundColor = randomcolor()
})

// change the background color of element `colorcontainer`
let randomcolor = function(){
    let redvalue = Math.floor(Math.random()*255)
    let greenvalue = Math.floor(Math.random()*255)
    let bluevalue = Math.floor(Math.random()*255)
    return `rgb(${redvalue},${greenvalue},${bluevalue})`
}

// collect the two buttons

// add click event to each button to the background color to olive and orange respectively

// reset the background color to white

/* Tuesday, June 18 */
/* event object */
// collect the button
let btnpressme = document.querySelector(".btnpressme")
btnpressme.addEventListener("click", function(e) {
    // switch text content `btnpressme` button from `Press Me` to `Button was pressed`
    if (e.target.textContent === "Press Me!") {
        e.target.textContent === "Button was pressed"
    }
    else {
        e.target.textContent === "Press Me!"
    }
    // toggle between class `btnpressme` and `btnactive`
    e.target.classList.toggle("btnactive")
})

/* remove an item from a list */
let listfruits = document.querySelector("#listfruits")
listfruits.addEventListener("click", function(event) {
    if(event.target.tagName.toLowerCase() === "li"){
        event.target.remove()
    }
})

/* prevent default of an event */
let visitqcc = document.querySelector(".visitqcc")
visitqcc.addEventListener("click", function(event){
    event.preventDefault()
    alert("QCC website is off! Try later")
})

/* SCROLL EVENTS */
let content = document.querySelector("#content")
let btnscrollright = document.querySelector(".btnscrollright")
btnscrollright.addEventListener("click", function(){
    window.scrollBy(100,0) // 100 on x axis so 100 to the right, 0 on the y axis and 0 to the left
})

/* slice photo gallery */
let btnleft = document.querySelector(".btnleft")
let btnright = document.querySelector(".btnright")
let gallerycontainer = document.querySelector(".gallerycontainer")

btnleft.addEventListener("click", function() {
    gallerycontainer.scrollBy({
        left: -500,
        behavior: "smooth"
    })
})

btnright.addEventListener("click", function() {
    gallerycontainer.scrollBy({
        left: 500,
        behavior: "smooth"
    })
})

/* to top */
const gotop = document.querySelector(".gotop")

window.addEventListener("scroll", function(){
    let pxtop = window.scrollY;
    if (pxtop >= 300){
        gotop.style.display = "block"
    }
    else {
        gotop.style.display = "none"
    }
})

/**
 * Thursday June 20
 */
/* FORM EVENTS */
/* input events */
// get reference to the form elements 
const myform = document.querySelector("#myform")
// get the <div class = "greeting">
const greeting = document.querySelector(".greeting")
const greetingname = document.querySelector(".greeting p span")

myform.addEventListener("submit", function(event){
    // prevent the default form submission behavior
    event.preventDefault()

    // start form validation, username
    const usernameinput = document.querySelector("#username")
    // collect the input text value
    const username = usernameinput.value 
    // validation 1: make sure the user types a username before pressing the submit button
    if (username === ""){
        alert("Please enter a username")
        return; // stop further execution
    }

    // if the validation passed, you can submit the data to the server 
    // greeting message after the validation
    greetingname.innerHTML = username
    greeting.style.display = "block"

    // after the form is submitted, we can clear the username
    userenameinput.value = ""

})

/**
 * password validation
 */
// collect form elements 
const passwordfield = document.querySelector("#passwordfield")
const submitbtn = document.querySelector(".submitbtn")
// collect the password error message element 
const passworderror = document.querySelector(".passworderror")

// disabled button when load the window
window.addEventListener("load", function(){
    submitbtn.disabled = true
    submitbtn.style.backgroundColor = "lightgray"
})

// check the length of the password 
passwordfield.addEventListener("input", function(){
    let numbercharacter = passwordfield.value.length
    if(numbercharacter < 8){
        passworderror.textContent = "Password must be 8+ characters..."
        passworderror.style.color = "red";
        passwordfield.style.border = "solid 2px red"
    }
    else {
        passworderror.innerHTML = "&#x2713;"
        passworderror.style.color = "green"
        passwordfield.style.border = "solid 2px green"
        submitbtn.disabled = false
        submitbtn.style.backgroundColor = "red"
    }
})
