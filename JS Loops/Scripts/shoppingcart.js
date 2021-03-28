let shoppingCart = [
    { name: "loaf of bread", type: "food", quantity: 1, price: 1 },
    { name: "multipack beans", type: "food", quantity: 1, price: 1 },
    { name: "apples", type: "food", quantity: 1, price: 0.90 },
    { name: "tomatoes", type: "food", quantity: 2, price: 1.1 },
    { name: "milk", type: "drink", quantity: 2, price: 8.99 },
    { name: "chicken thighs", type: "food", quantity: 2, price: 3.99 },
    { name: "dutch edam cheese", type: "food", quantity: 1, price: 1.99 },
    { name: "knifes", type: "kitchen", quantity: 1, price: 1.99 },
    { name: "icecream", type: "food", quantity: 1, price: 4.99 },
    { name: "potatoes", type: "food", quantity: 3, price: 1.0 }
  ];

// Calculating Totals

function totalPrice(cart, discountAmount, type) {
    let total = 0;
    for (const item of cart) {
        if (item.type === type || type === 'any'){
            total += (item.quantity * item.price) * (1 - discountAmount / 100);
        } else {
            total += (item.quantity * item.price);
        }
    }
    return total.toFixed(2);
}

console.log(totalPrice(shoppingCart, 20, 'food'));
console.log(totalPrice(shoppingCart, 50, 'any'));
console.log(totalPrice(shoppingCart, 0, 'drink'));
console.log(totalPrice(shoppingCart, 10, 'drink'));