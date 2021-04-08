//logical operators
//
//|| or - based on boolean truth table

var isWorking = true;
var isEnabled = false;
var res = isWorking || isEnabled;
console.log(res);
//advanced or operator.

var name = "Subramaian";

/**
 * if first operand(name) is truthy, then result is first operand itself else
 * second operand
 */

var message = name || "Sorry";

console.log(message);

var price = 0;
var todayMinPrice = price || 10;

console.log(todayMinPrice);
///////////////////////////////////////////////////////////////////////////////
//And operator is opposit to or operator

var andRes = isWorking && isEnabled
console.log(andRes);

/**
 * if first operand(name) is truthy, then result is second operand  else
 * first operand
 */

message = name && "Sorry";
console.log(message);
todayMinPrice = price && 10;
console.log(todayMinPrice);
/////////////////////////////////////////////////////////////////////////////

//inverter !

var reached =true;
console.log(!reached)
var mycount =1000;
console.log(!mycount)

//dont invert !!
console.log(!!reached)
console.log(!!mycount)
