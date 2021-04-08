//NAN

var qty; //undefined
var price = 1000;

var totalPrice = qty * price;
console.log(`Qty ${qty} price ${price} Total Price ${totalPrice}`)
//Type conversion

var count = "10"; // it string type but value is numerical value

//Type conversion happened here; implicit conversion
var totalCount = count * 10;
console.log(`Total Count ${totalCount}`);

//Type conversion using js built in api.
//double(64 bit) to 32 bit(integer)
var totalCounter = parseInt(count) * 10;
console.log(`Total Count ${totalCounter}`);
var totalCounterdouble = parseFloat(count,16) * 10;
console.log(`Total Count ${totalCounterdouble}`);


//Nan and type conversion
// here $100 is not numerical so during type conversion, error is thrown.
var stockValue = "$100";
var totalStock  = parseInt(stockValue) * 100;
console.log(`Total Stock ${totalStock}`);


