//array transformation

var doubleIt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//console.log(doubleIt)
// doubleIt.forEach(function(item,index){
//     console.log(item)
// });
doubleIt.forEach((item, index) => {
    console.log(item)
});

// var doubledArray = doubleIt.map(function (item) {
//     //logic
//     return item * 2;
// });
var doubledArray = doubleIt.map(item => item * 2);
console.log(doubledArray)

var strs = ["a", "b", "c", "d"];
var upperCase = strs.map(item => item.toUpperCase())
upperCase.forEach((item, index) => {
    console.log(index,item)
});