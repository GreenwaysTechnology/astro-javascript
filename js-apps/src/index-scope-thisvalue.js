'use strict'; //enabling safe mode

//sayHello belongs to which object
function sayHello(){
    return this; // this reprents object 
}
//owner of sayHello is decided when you call it-caller.
console.log(sayHello()); // here there is no sign of object obj.sayHello();
//console.log(window.sayHello())

