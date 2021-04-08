//if and else

var a = 100;
var result = '';
if (a > 0) {
    result = 'positive';
} else {
    result = 'NOT positive';
}
console.log(result)

var x = 10;

if (x > 50) {
    console.log("X is greater than 50")

} else if (x > 5) {
    /* do something */
    console.log("X is greater than 5")
} else {
    /* do something */
    console.log("No match found")
}

var expr = 'Papayas';
switch (expr) {
    case 'Oranges':
        console.log('Oranges are $0.59 a pound.');
        break;
    case 'Mangoes':
    case 'Papayas':
        console.log('Mangoes and papayas are $2.79 a pound.');
        // expected output: "Mangoes and papayas are $2.79 a pound."
        break;
    default:
        console.log(`Sorry, we are out of ${expr}.`);
}
