function receiptGenerator(name, price, qty){
    return `${name} x ${qty} = ${price * qty} Taka`
}

console.log(receiptGenerator("apple", 100, 5));
console.log(receiptGenerator("pen", 200, 5));
console.log(receiptGenerator("book", 600, 5));
console.log(receiptGenerator("ruler", 800, 5));
console.log(receiptGenerator("pin", 10, 5));