//function as parameter

// function sayGreet(callback) {
//     callback();
// }

var sayGreet = callback => {
    callback('subramanian');
}
var hello = name => console.log('hello', name)
sayGreet(hello);
sayGreet(name => console.log('hello arrow'));

/////////////////////////////////////////////////////////////////////////////

// function outter() {
//     console.log('outer')
//     return function inner() {
//         console.log('inner')
//     }
// }
// function outter() {
//     console.log('outer')
//  return () => {
//         console.log('inner')
//     }   
// }
// function outter() {
//     console.log('outer')
//     return () => console.log('inner')

// }
// var outter = () => {
//     console.log('outer')
//     return () => console.log('inner')
// }
var outter = () => () => console.log('inner')
outter()();

(() => console.log('app is initalied'))();

((name = 'default') => console.log(name))('foo');
var result = ((name = 'default') => name)('foo');
console.log(result);