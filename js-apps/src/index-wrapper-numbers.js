//Number

//static properties
console.log(`Max Value ${Number.MAX_VALUE}`)
console.log(`Min Value ${Number.MIN_VALUE}`)
console.log(`Negative infinity ${Number.NEGATIVE_INFINITY}`)
console.log(`Postive infinity ${Number.POSITIVE_INFINITY}`)
console.log(`NaN Value ${Number.NaN}`)
//static methods
var x = 100;
var y;
var res = x * y;
if (Number.isNaN(res)) {
    console.log('something went wrong')
} else {
    console.log('ok')
}
//instance methods
//var n = new Number(100);
var n = 100.8956; //new Number(1000.8956)
console.log(`Round off ${n.toFixed()} ${n.toFixed(2)}`)
console.log(`Exponential ${n.toExponential(2)}`)

