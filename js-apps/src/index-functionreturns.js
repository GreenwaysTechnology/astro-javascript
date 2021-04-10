///function returns

function sayHello() {
    return 'Hello';
}
console.log(sayHello())

function sayHai() {
    var message = 'hai'
    return message;
}
console.log(sayHai())

function sayGreet() {
    return;
}
console.log(sayGreet())

function add(a = 1, b = 1) {
    return a + b; //expression
}
console.log(add(1, 2))

function validate(username = 'root', password = 'root') {
    if (username === 'admin' && password === 'admin') {
        return true;
    }
    return;
}
validate() ? console.log('success') : console.log('failed')
validate('admin','admin') ? console.log('success') : console.log('failed')