/* DISPLAY FORM 'display.html' */
// collect the elements 
const collectedname = document.querySelector(".collectedname")
const collectedlanguage = document.querySelector(".collectedlanguage")
// set the values stores in sessionStorage to each collelcted elements 
collectedname.innerHTML = sessionStorage.getItem('firstname')
collectedlanguage.innerHTML = sessionStorage.getItem('selection_language')