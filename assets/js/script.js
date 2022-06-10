// script.js
// PROG1800-22S-Sec3 - Assignment 1
// Javascript attached to the dynamic website that generates a receipt after choosing the items the user wants to buy.

// Daniela Onici Student ID# 8754297, 2022.06.07: Created
//                                    2022.06.08: Finished

cartQuantity = [];
cartType = [];
cartPrice = [];

function addToCart(cakeType) {
  cartType.push(cakeType);

  var qtyInput = parseInt(prompt("Add the quantity"));
  cartQuantity.push(qtyInput);

  var finalPrice;

  switch (cakeType) {
    case "RedVelvet":
      finalPrice = qtyInput * 35;
      break;
    case "Rainbow":
      finalPrice = qtyInput * 40;
      break;
    case "Strawberry":
      finalPrice = qtyInput * 30;
      break;
    case "Blueberry":
      finalPrice = qtyInput * 45;
      break;
    case "Lemon":
      finalPrice = qtyInput * 35;
      break;
  }
  cartPrice.push(finalPrice);
}

function validate(quantity) {
  if (isNaN(quantity)) {
    alert("Not a valid number. Please insert only numbers");
    return false;
  } else if (quantity <= 0) {
    alert("Invalid number. Please insert a number greater than 0");
    return false;
  } else {
    return true;
  }
}

function receipt(cart) {
  var name = prompt("Please, insert your name:");
  if (isFinite(name)) {
    alert("Invalid name. Please, input a name");
  } else if (name == null) {
    alert("Empty. Please insert your name.");
  }
}
