const products = ["pen", "notebook", "backpack", "water bottle", "calculator"];
const prices = [10, 50, 300, 150, 500];
let userBudget = 500;
let userCart = {};

// function to display all products and their prices
const displayProducts = () => {
  console.log("Available products:");
  for (let i = 0; i < products.length; i++) {
    console.log(`${i + 1}. ${products[i]} - R${prices[i]}`);
  }
};

// function for selection of multiple products by user
const userSelection = () => {
  while (true) {
    displayProducts();

    // ask user to select a product or exit
    let productIndex =
      parseInt(prompt("Enter the product number to select or 0 to exit: ")) - 1;

    if (productIndex === -1) {
      break;
    }

    // validate the product index
    if (productIndex < 0 || productIndex >= products.length) {
      console.log("Invalid product number. Please try again.");
      continue;
    }

    // ask user for quantity
    let quantity = parseInt(
      prompt(`How many ${products[productIndex]}s would you like to buy? `)
    );

    // validate the quantity
    if (isNaN(quantity) || quantity <= 0) {
      console.log("Invalid quantity. Please try again.");
      continue;
    }

    // add item to the cart
    if (userCart[products[productIndex]]) {
      userCart[products[productIndex]] += quantity;
    } else {
      userCart[products[productIndex]] = quantity;
    }

    console.log(`Added ${quantity} ${products[productIndex]}(s) to your cart.`);
  }

  console.log("Your final cart:", userCart);
};
