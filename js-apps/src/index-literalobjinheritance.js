

var parent = {
    color: 'red'
}
var child = {
    size: 10
}
child.__proto__ = parent;
console.log(child.size, child.color);

var product = {
    color: 'pink'
}
var item = Object.create(product);
item.size = 100;
item.price = 98;
item.qty = 90;
console.log(item.color,item.size,item.price,item.qty)