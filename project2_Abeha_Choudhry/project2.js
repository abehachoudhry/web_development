/** SHOPPING CART */
// collect the elements
const formitem1 = document.querySelector(".formitem1")
const itemname = document.querySelector(".itemname")
const itemdescription = document.querySelector(".itemdescription_home").textContent
const saleprice = document.querySelector(".saleprice").textContent
const imgitem1 = document.querySelector(".imgitem1").getAttribute('src')

formitem1.addEventListener("submit", function(){
    // collect the quantity
    const x = document.querySelector('.quantityinput').value


    // set data into sessionStorage
    sessionStorage.setItem('quantityitem1', x)
    sessionStorage.setItem('name_item1', itemname)
    sessionStorage.setItem('description_item1', itemdescription)
    sessionStorage.setItem('sale_price', saleprice)
    sessionStorage.setItem('item_image', imgitem1)
})