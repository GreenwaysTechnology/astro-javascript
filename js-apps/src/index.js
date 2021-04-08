//function args and parameters
//message is arg
function sayHello(message) {
    console.log(message);
}
//pass value is here parameter
sayHello('Hello');
sayHello(10)
sayHello(true)
sayHello()
sayHello(NaN)


function add(a, b) {
    var result = a + b;
    console.log(result)
}
add(10, 10);
add()
add("10", "20")
add("10", 10)
add(10)
add(8, 8, 10)

function multiply(a, b) {
    //default value initalization if variables having undefined 
    //this is es 5 style
    a = a || 0;
    b = b || 0;
    var res = a * b;
    console.log(res);
}
multiply(10, 10)
multiply()
//es 6 style of default value initalizaiton
//default args
function multiplyE6(a = 0, b = 0) {
    var res = a * b;
    console.log(res);
}
multiplyE6(18, 10)
multiplyE6()
/////////////////////////////////////////////////////////////////////////////
//what if i want to pass more parameters, i dont know in advance how many args 
//i pass
function logger() {
    //arguments : built in variable, holding all parameter values
    console.log(arguments) //es 5 syntax
}
logger('hello')
logger('hello', 'greet')
logger('hello', 'welldone', 'good', 'js')

//Rest Operator : ... es 6 syntax to replace "arguments"
function sum(...numbers) {
   console.log(numbers)
}
sum(1, 2, 4);
sum(1, 2, 3, 4, 5, 6, 7, 8)