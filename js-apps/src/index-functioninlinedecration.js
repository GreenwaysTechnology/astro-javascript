//how to declare functions and how to call it.

//way -1 
function sayHello(name) {
    console.log('hello', name);
}
sayHello('subramanian');

//function is literal. you can assign to a variable.
var hello = sayHello;
console.log(hello);
hello('ram');
/////////////////////////////////////////////////////////////////////////////
//inline function declaration.
//way -2
var hai = function sayHai(name) {
    console.log('hi', name);
};
hai('subu')
//sayHai()

//way -3 : anonymous function ; function without name
var greet = function (name) {
    console.log('greet', name);
};
greet('subu')
