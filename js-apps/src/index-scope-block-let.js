//block scope

console.log(a);

let  a =10;

//without block scope
function sayMessage(message) {
    if (message) {
        //block ;if 
        var name = 'foo'
    }
    console.log(name);
}
sayMessage('hello')
//with block scope ;using iife function
function sayHai(message) {
    (function () {
        if (message) {
            //block ;if 
            var name = 'foo'
        }
    })()
  //  console.log(name);
}
sayHai('hello')
//block scope via es 6 let and const keywords

function sayHello(message) {
    if (message) {
        //block ;if 
       // let firstName = 'foo'
       const firstName = 'foo'
    }
    console.log(firstName);
}
sayHello('hello')