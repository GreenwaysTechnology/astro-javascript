//Date 

//
var datestr = Date()
var dateobj = new Date();
console.log(`${typeof datestr}`)
console.log(`${typeof dateobj}`)
//static methods
console.log(`Current Time in Ms ${Date.now()} $ `)
console.log(`Parsed Date ${Date.parse('04 Dec 1995 00:12:00 GMT')}`)

//instance methods
var date = new Date();
console.log(` day of the month (1–31) ${date.getDate()}`)
console.log(` day of the week (0–6)   ${date.getDay()}`)
console.log(` the hour (0–23)    ${date.getHours()} hrs Mins ${date.getMinutes()}`)

//date conversion/formating
console.log(` Readable String Representation ${date.toDateString()}`)
console.log(` Readable String Representation ${date.toLocaleDateString()}`)

//Perfermance testing: How much time took for given operations

var start = Date.now();
for (var i = 0; i < 1000000000; i++) {

}
var end = Date.now();
var elapsed = end - start
console.log(`${elapsed} Time taken by for loop for 1000000000 iterations`)

