//

// function getStock() {
//     return {
//         id: 1,
//         symbol: 'GOOGLE',
//         qty: 100,
//         price: 1000
//     };
// }
// console.log(getStock())

// function getStock(id = 1, symbol = 'GOOGLE', qty = 100, price = 1000) {
//     return {
//         id: id,
//         symbol: symbol,
//         qty: qty,
//         price: price
//     };
// }
//destructuring
// function getStock(id = 1, symbol = 'GOOGLE', qty = 100, price = 1000) {
//     //if key:locavariable is same- key:value is same, make it one
//     return {
//         id,
//         symbol,
//         qty,
//         price
//     };
// }
var getStock = (id = 1, symbol = 'GOOGLE', qty = 100, price = 1000) => ({
    id,
    symbol,
    qty,
    price
});

console.log(getStock())
console.log(getStock(2, 'MICROSOFT', 10000, 1900))