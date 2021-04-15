
//stop updating
var emp = {
    id: 1,
    name: 'subramanian',
    city: 'coimbatore'
}
Object.defineProperty(emp, 'id', {
    writable: false
});
console.log('before update')
console.log(emp)
emp.id = 90;
console.log('after update')
console.log(emp)
//how to prevent adding new properties
var cust = {
    id: 1,
    name: 'subramanian'
};
console.log('before add')
console.log(cust)
Object.freeze(cust);
console.log('after add')
cust.city = 'coimbatore'
console.log(cust)

//how to prevent deleting any properties 
var stock = {
    id: 1,
    value: 100,
    qty: 900
}
Object.seal(stock);
console.log('before delete')
console.log(stock)
delete stock.qty;
console.log('after delete')
console.log(stock)