//how to return a function from another function.

function multiply() {
    return 10 * 10;
}
var mulRes = multiply();
console.log(mulRes);
console.log(multiply());
///////////////////////////////////////////////////////////////////////////////
//inner functions.

function outter() {
    var myvar = 'foo'
    console.log('outter')
    function inner() {
        console.log('inner')
    }
    //calling inside outter function
    inner();
}
outter();
//inner();
//console.log(myvar)

// function outter1() {
//     var myvar = 'foo'
//     console.log('outter')
//     function inner() {
//         console.log('inner')
//     }
//     return inner;
// }
// var res = outter1();
// console.log(res);
// res();

// function outter1() {
//     var myvar = 'foo'
//     console.log('outter')
//     return function inner() {
//         console.log('inner')
//     }
// }
// var res = outter1();
// console.log(res);
// res();

// function outter1() {
//     var myvar = 'foo'
//     console.log('outter')
//     return function (name) {
//         console.log('inner',name)
//     }
// }
// var res = outter1();
// res('subramanian');
// //refactoring calling syntax
// outter1()('subramanian');

// function outter1() {
//     var myvar = 'foo'
//     console.log('outter')
//     return function (name) {
//         return `inner ${name}`;
//     }
// }
// var res = outter1();
// console.log(res('subramanian'));
// //refactoring calling syntax
// console.log(outter1()('subramanian'));

var outter1 = function () {
    console.log('outter')
    return function (name) {
        return `inner ${name}`;
    }
};
var res = outter1();
console.log(res('subramanian'));
//refactoring calling syntax
console.log(outter1()('subramanian'));