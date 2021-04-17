'use strict'
//dynamic binding

function sayHello() {
    return this;
}
//bind sayHello with object(caller/owner)

let message = {
    name: 'message'
};
console.log(sayHello.call(message))

let greet = {
    name: 'greet'
};
console.log(sayHello.call(greet))
console.log(sayHello.call(window))


function getCordinate(...name) {
    console.log(`${name} => x is ${this.x} y ${this.y}`)
}
//getCordinate()
//owner
const map = {
    x: 1000,
    y: 3888
}
//bind owner
getCordinate.call(map, 'Google Map', 'google');
//new Owner
window.x = 90;
window.y = 89;
getCordinate.call(window, 'Browser', 'chrome')

function getStocks(...stocks) {
    console.log(`${this.name}`)
    console.log(stocks);
}

const obj = {
    name: 'google'
};
getStocks.apply(obj, [10, 20, 30, 40, 45]);

function increment() {
    return this.count++;
}
const CounterApp = {
    count: 0
}
const inc = increment.bind(CounterApp);

for (let i = 0; i < 10; i++) {
    console.log('counter', inc())
}