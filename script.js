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
