//Array:

//create simple array
var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(list)
var strlist = ["a", 'b', "c"];
console.log(strlist)
//collection of objects
var profiles = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
    { id: 3, name: 'c' },
    { id: 4, name: 'd' },
];
console.log(profiles);

class Product {
    constructor(id = 0, name = 'pname') {
        this.id = id;
        this.name = name;
    }
}
//list of products
var products = [
    new Product(1, 'p1'),
    new Product(2, 'p2'),
    new Product(3, 'p3'),
    new Product(4, 'p4'),
    new Product(5, 'p5')
];
console.log(products)

//mixed array
var mixed = ['a', 1, true, new Product(), { id: 1, name: 'test' }, function () { }];
console.log(mixed)

//nested arrays
var nested = [
    'a',
    [
        12, 10, 90
    ],
    'hello'

];
console.log(nested);

//
var data = [
    {
        title: "Main dishes",
        data: ["Pizza", "Burger", "Risotto"]
    },
    {
        title: "Sides",
        data: ["French Fries", "Onion Rings", "Fried Shrimps"]
    },
    {
        title: "Drinks",
        data: ["Water", "Coke", "Beer"]
    },
    {
        title: "Desserts",
        data: ["Cheese Cake", "Ice Cream"]
    }
];
console.log(data)
