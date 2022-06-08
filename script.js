// script.js
// PROG1800-22S-Sec3 - Assignment 1
// Javascript attached to the dynamic website that generates a receipt after choosing the items the user wants to buy.

// Daniela Onici Student ID# 8754297, 2022.06.07: Created
//                                    2022.06.08: Finished

function addingRedVelvet() {
  while (true) {
    var redVelvet = parseInt(prompt("Add the quantity"));

    if (isNaN(redVelvet)) {
      alert("Not a valid number. Please insert only numbers");
    } else if (redVelvet <= 0) {
      alert("Invalid number. Please insert a number greater than 0");
    } else {
    const cart = [];
    var qttRedVelvet = 45 * redVelvet;
    }
  }
}
