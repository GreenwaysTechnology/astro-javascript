
//shared property
class Product {
    constructor(id) {
        this.id = id;
    }
}
Product.prototype.price = 100;
Product.prototype.qty = 10;

class Computer extends Product {
    constructor(id = 0, name) {
        super(id)
        this.name = name;
    }
}


// var product = null;
// product = new Product(23);
// console.log(product.id, product.price, product.qty)

// product = new Product(34);
// console.log(product.id, product.price, product.qty)


var product = null;
product = new Computer(23);
console.log(product.id, product.price, product.qty)

product = new Computer(34);
console.log(product.id, product.price, product.qty)