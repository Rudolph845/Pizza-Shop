
/// Hamburger Icon Display
const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navBarList = document.getElementsByClassName("nav-bar-list")[0]

toggleButton.addEventListener('click', () => {
  navBarList.classList.toggle('active')
})


/// Shopping Cart 

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready)
} else {
  ready()
}

//// Remove an item from the cart 

function ready() {
  var removeCartItemButtons = document.getElementsByClassName("button-remove")
  for ( var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener("click", removeCartItem)
  }

  var quantityInputs = document.getElementsByClassName("food-quantity")
  for ( var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i]
    input.addEventListener("change", quantityChanged)
  }

  var addToCartButtons = document.getElementsByClassName("btn-add-to-cart")
  for ( var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i]
    button.addEventListener("click", addToCartClicked)
  }
}


function removeCartItem (event) {
  var buttonClicked = event.target
  buttonClicked.parentElement.parentElement.remove()
  updateCartTotal()
}

function quantityChanged (event) {
  var input = event.target
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1
  }
  updateCartTotal()
}


function addToCartClicked (event) {
  var button = event.target
  var shopItem = button.parentElement.parentElement
  var title = shopItem.getElementsByClassName("store-item-name")[0].innerText
  var price = shopItem.getElementsByClassName("food-price")[0].innerText
//// Left off here, can't get the image. 28:30

  //var image = shopItem.getElementsByClassName("img-border")[0].src
  console.log(title, price)
}

///// Cart Total 

function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName("cart-items")[0]
  var cartRows = cartItemContainer.getElementsByClassName("food")
  var total = 0
  for ( var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i]
    var priceElement = cartRow.getElementsByClassName("food-price")[0]
    var quantityElement = cartRow.getElementsByClassName("food-quantity")[0]
    var price = parseFloat(priceElement.innerText.replace("$", ""))
    var quantity = quantityElement.value
    total = total + (price * quantity)
  }
  total = Math.round (total * 100) / 100
  document.getElementsByClassName("total-price")[0].innerText = "$" + total
}
