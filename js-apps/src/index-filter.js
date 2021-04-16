//filter

var list = [10, 20, 33, 1, 5, 7, 8];

//find even numbers from the list
// var even = list.filter(function (i) {
//     return i % 2 === 0
// });
var even = list.filter(i => i % 2 === 0);
console.log(even)
var odd = list.filter(i => i % 2 !== 0);
console.log(odd)