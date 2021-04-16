//Array sorting
var list = [1, 30, 4, 21, 100000];
//
// list.sort(function (a, b) {
//     return a - b;
// // })
// list.sort((a, b) => {
//     return a - b;
// })

list.sort((a, b) => a - b)
console.log('asc', list)
list.sort((a, b) => b - a)
console.log('desc', list)

//objects sorting : objects are sorted based on keys of objects.
var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
];
console.log('Objects before sort ing', items)
items.sort((a, b) => {
    return a.value - b.value
})
console.log('Objects after sort ing asc order', items)
//name based sorting
items.sort(function (a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    // return nameA.localeCompare(nameB)
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    // names must be equal
    return 0;
});
console.log('Objects after sort ing asc order', items)
