// Create a function that has 2 prev variables
function makeTransaction(quantity, pricePerDroid) {
  //   Create const var that has a math operation
  const totalPrice = quantity * pricePerDroid;
  const transactionMessage = `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  return transactionMessage;
}

console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"
