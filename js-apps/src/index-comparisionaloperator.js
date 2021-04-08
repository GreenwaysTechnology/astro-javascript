//relational operators

var x = 100;
var y = 10;
console.log((x < y) ? "less" : "not less")
console.log((x > y) ? "great" : "not great")
// == 

console.log((x == y) ? "equal" : "not equal")
console.log((x === y) ? "equal" : "not equal")

var a = "10";
var b = 10;
//test only value
console.log((a == b) ? "equal" : "not equal")
//test type + value : recommended operator ===
console.log((a === b) ? "equal" : "not equal")

console.log((a != b) ? "equal" : "not equal")
console.log((a !== b) ? "equal" : "not equal")