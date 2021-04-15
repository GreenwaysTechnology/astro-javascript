//has-a

class Product {
    constructor(pid = '00', pname = 'foo') {
        this.pid = pid;
        this.pname = pname
    }
}
class Order {
    constructor(orderId = 'A000', product = new Product()) {
        this.orderId = orderId;
        //has-a
        this.product = product;
    }
}
var order = null;
order = new Order();
console.log(order.orderId, order.product.pname)

order = new Order(1, new Product(90, 'myproduct'));
console.log(order.orderId, order.product.pname)