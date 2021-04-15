
//object creations

Object.prototype.toString = function(){
    return `My object`
}

//1
function Employee() {

}
var emp = new Employee()
console.log(emp.toString())

//2.
class Customer {

}
var cust = new Customer();
console.log(cust.toString())

//3
var product = {
    id: 1
}
console.log(product.toString())

//4
var stock = new Object();
stock.id = 1;
stock.symbol = 'google';
console.log(stock.id, stock.symbol)
