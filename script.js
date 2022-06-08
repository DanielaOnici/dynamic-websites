// script.js
// PROG1800-22S-Sec3 - Assignment 1
// Javascript attached to the dynamic website that generates a receipt after choosing the items the user wants to buy.

// Daniela Onici Student ID# 8754297, 2022.06.07: Created
//                                    2022.06.08: Finished

function addingRedVelvet() {
  var quantity = parseInt(prompt("Add the quantity"));
  const cart = [];

  if (isNaN(quantity)) {
    alert("Not a valid number. Please insert only numbers");
  } else if (quantity <= 0) {
    alert("Invalid number. Please insert a number greater than 0");
  } else {
    var qttRedVelvet = 45 * quantity;
    cart.includes(qttRedVelvet);
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
