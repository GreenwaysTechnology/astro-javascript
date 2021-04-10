//function as parameter to another function.

function add(a, b) {
    var c = a + b;
    console.log(c);
}
//passing parameters
//via variables
var x = 10;
var y = 10;
add(x, y);
//hardcoded values
add(10, 20)
//////////////////////////////////////////////////////////////////////////////////
//hai = greet = 
function sayGreet(callback) {
    var status = callback('subramanian');
    console.log(status);
}
//regular function
function sayHello(name) {
    console.log('hello', name)
    return 'done'
}
//via variable
var greet = function (name) {
    console.log('Hai', name)
    return 'done'
};
sayGreet(greet)

//hardcode values
sayGreet(function (name) {
    console.log('hai hai')
    return 'done'
});
sayGreet(sayHello)
