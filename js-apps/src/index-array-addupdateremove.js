//

var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//read one element
console.log(list[0], list[9])
//get length of an array.
console.log(list.length)
//last element
console.log(list[list.length - 1])
//iterators: for loop
for (var i = 0; i < list.length; i++) {
    console.log(`i value ${list[i]}`)
}

//adding element at end of the array: push
var newList = [1, 2, 3];
console.log('before adding')
console.log(`length ${newList.length}`);
var newLength = newList.push(4, 5, 6, 7, 8)
console.log(`length ${newLength} ${newList}`);

//remove last element/ at end of the array: pop
console.log(`Removed element ${newList.pop()}`)

for (var i = 0; i < list.length; i++) {
    console.log(`Removed element ${list.pop()}`)
}
//remove first element /at begining of the array: shift
list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(list.shift(), list, list.unshift(1000), list)

///update existing elements with new element
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log('before update', fruits);
fruits[0] = "Kiwi"
console.log('After update', fruits);

var months = ['Jan', 'March', 'April', 'June'];
console.log(months)
console.log(months.splice(1, 0, 'Feb'));
console.log(months)

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
console.log(animals.slice(2, 4));

//merging /concat arrays;

var todos = [{ id: 1, status: true, text: 'learn js' }]
var newtdos = [{ id: 2, status: false, text: 'learn node js' }]
var finaltodos= todos.concat(newtdos)
console.log(finaltodos);