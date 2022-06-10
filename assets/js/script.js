// script.js
// PROG1800-22S-Sec3 - Assignment 1
// Javascript attached to the dynamic website that generates a receipt after choosing the items the user wants to buy.

// Daniela Onici Student ID# 8754297, 2022.06.07: Created
//                                    2022.06.08: Finished

cartQuantity = [];
cartType = [];
cartPrice = [];

function addToCart(cakeType) {
  var qtyInput = parseInt(prompt("Add the quantity"));

  if (!validateNumber(qtyInput)) {
    return;
  }

  cartQuantity.push(qtyInput);
  cartType.push(cakeType);

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

  console.log(cartQuantity);
  console.log(cartPrice);
  console.log(cartType);
}

function validateNumber(quantity) {
  if (isNaN(quantity)) {
    alert("Not a valid number. Please insert only numbers");
    return false;
  } else if (quantity <= 0) {
    alert("Invalid number. Please insert a number greater than 0");
    return false;
  } else if (!Number.isInteger(quantity)) {
    alert("Invalid number. Please insert a whole number greater 0");
    return false;
  } else {
    return true;
  }
}

function receipt(cart) {
   var name = prompt("Please, insert your name:");

   if (!validateName(name)) {
     return;
  }

  var txtName = document.getElementById("customerName");
  var txt = document.createTextNode("Customer Name: " + name);

  txtName.appendChild(txt);

  //Creating the table
  var tableEl = document.getElementById("table");
  //Creating the table
  var rowTitleEl = tableEl.insertRow(0);

  var cellPriceEl = rowTitleEl.insertCell(0);
  var cellQuantityEl = rowTitleEl.insertCell(1);
  var cellNameEl = rowTitleEl.insertCell(2);

  cellPriceEl.innerHTML = "Price";
  cellQuantityEl.innerHTML = "Quantity";
  cellNameEl.innerHTML = "Cake Type";

  var rowEl;

  for (var i = 0; i < cartQuantity.length; i++) {
    rowEl = tableEl.insertRow(i + 1);

    cellPriceEl = rowEl.insertCell(0);
    cellQuantityEl = rowEl.insertCell(1);
    cellNameEl = rowEl.insertCell(2);

    cellPriceEl.innerHTML = `${cartPrice[i]}`;
    cellQuantityEl.innerHTML = `${cartQuantity[i]}`;
    cellNameEl.innerHTML = `${cartType[i]}`;
  }

  var priceSum = total(cartPrice);
  var tax = priceSum * 0.13;
  var finalPrice = Math.round(priceSum + tax);

  var txtTax = document.getElementById("tax");
  var txtFinalPrice = document.getElementById("finalPrice");
  var text1 = document.createTextNode("GST @13%: $" + tax);
  var text2 = document.createTextNode("Final Price: $" + finalPrice);

  txtTax.appendChild(text1);
  txtFinalPrice.appendChild(text2);
}

function validateName(name) {
  if (isFinite(name)) {
    alert("Invalid name. Please, input a name");
    return false;
  } else if (name == null) {
    alert("Empty. Please insert your name.");
    return false;
  } else {
    return true;
  }
}

function total(price) {
  var total = 0;
  for (var i = 0; i < price.length; i++) {
    total += price[i];
  }
  return total;
}
