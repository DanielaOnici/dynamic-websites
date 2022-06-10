// script.js
// PROG1800-22S-Sec3 - Assignment 1
// Javascript attached to the dynamic website that generates a receipt after choosing the items the user wants to buy.

// Daniela Onici Student ID# 8754297, 2022.06.07: Created
//                                    2022.06.10: Finished



//Creating array of quantity of cake, type of cake and total price of each
cartQuantity = [];
cartType = [];
cartPrice = [];

//Function created to every button on HTML to Add item to the cart.
//Each button in HTML already has as argument (Cake type) to pass to the function. 
function addToCart(cakeType) {

  //Asking to the user for the quantity of the item
  var qtyInput = parseInt(prompt("Add the quantity"));

  //Validating the input quantity
  if (!validateNumber(qtyInput)) {
    return;
  }

  //Adding the quantity of cake and type of cake into the array
  cartQuantity.push(qtyInput);
  cartType.push(cakeType);

  var finalPrice;

  //The argument passed to the funtion will define the value of the cake.
  //Multiplying the quantity by the value of the cake to obtain the total.
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
  //Adding the price to the array of prices
  cartPrice.push(finalPrice);
}

//Creating a function to validade the input by the user
function validateNumber(quantity) {
  
  //checking if it is an invalid number(null, especial character, character)
  if (isNaN(quantity)) {
    alert("Not a valid number. Please insert only numbers");
    return false;
    //checking if the number is less than zero
  } else if (quantity <= 0) {
    alert("Invalid number. Please insert a number greater than 0");
    return false;
    //checking if the number is not an integer/whole number
  } else if (!Number.isInteger(quantity)) {
    alert("Invalid number. Please insert a whole number greater 0");
    return false;
  } else {
    return true;
  }
}

//Creating a function to generate the receipt
//Everything that appears in HTML is inserted by JS (Customer name, table, tax an total price)
function receipt(cart) {

  //Asking to the user for the name
   var name = prompt("Please, insert your name:");

   //Validating the name input
   if (!validateName(name)) {
     return;
  }

  //Including the input name into HTML <p id="customerName">
  var txtName = document.getElementById("customerName");
  var txt = document.createTextNode("Customer Name: " + name);

  txtName.appendChild(txt);

  //Including a table into HTML <table id="table">
  var tableEl = document.getElementById("table");

  //Creating the head of the table
  var rowTitleEl = tableEl.insertRow(0);

  //creating the cells of the table (Columns: Cake Type, Quantity and Price)
  var cellPriceEl = rowTitleEl.insertCell(0);
  var cellQuantityEl = rowTitleEl.insertCell(1);
  var cellNameEl = rowTitleEl.insertCell(2);

  //Including the text (Columns: Cake Type, Quantity and Price) to the cells
  cellPriceEl.innerHTML = "Price";
  cellQuantityEl.innerHTML = "Quantity";
  cellNameEl.innerHTML = "Cake Type";

  var rowEl;

  //Creating a loop to include more rows and the items that were selected by the user
  for (var i = 0; i < cartQuantity.length; i++) {

    //Creating rows below the head title of the table
    rowEl = tableEl.insertRow(i + 1);

    //Including the items selected by the user into the table 
    cellPriceEl = rowEl.insertCell(0);
    cellQuantityEl = rowEl.insertCell(1);
    cellNameEl = rowEl.insertCell(2);

    //Including the items selected by the user into the table in HTML
    cellPriceEl.innerHTML = `${cartPrice[i]}`;
    cellQuantityEl.innerHTML = `${cartQuantity[i]}`;
    cellNameEl.innerHTML = `${cartType[i]}`;
  }

  //Creating variables with the sum of prices, tax and final price
  var priceSum = total(cartPrice);
  var tax = priceSum * 0.13;
  var finalPrice = Math.round(priceSum + tax);

  //Including the text into the tags <p id="tag"> and <p id="finalPrice"
  var txtTax = document.getElementById("tax");
  var txtFinalPrice = document.getElementById("finalPrice");
  var text1 = document.createTextNode("GST @13%: $" + tax);
  var text2 = document.createTextNode("Final Price: $" + finalPrice);

  txtTax.appendChild(text1);
  txtFinalPrice.appendChild(text2);
}

//Creating a function to validade the input name
function validateName(name) {
  
  //checking if the input is a number
  if (isFinite(name)) {
    alert("Invalid name. Please, input a name");
    return false;
    //checking if the input is empty
  } else if (name == null) {
    alert("Empty. Please insert your name.");
    return false;
  } else {
    return true;
  }
}

//Creating a funtion to calculate the values into the array of cartPrices
//Each value added to the array is the product of quantity of cake by its price
function total(price) {
  var total = 0;

  //Creating a loop to add all the values inside the array
  for (var i = 0; i < price.length; i++) {
    total += price[i];
  }
  return total;
}
