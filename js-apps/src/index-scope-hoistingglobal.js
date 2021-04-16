
/**
 *
 * 
 * variable declaration is moved up:Hoisting
var i;
var j;
console.log(i, j)
i = 10;
j = 30;
 */

//can we access the i and j before declaration.

console.log(i, j)

var i = 10;
var j = 30;

console.log(i, j)

sayHello();
//function declaration
function sayHello() {
    console.log('Hello')
}
sayHello()

//var hai=undefined
hai();

var hai = function () {
    console.log('hai');
};
hai();