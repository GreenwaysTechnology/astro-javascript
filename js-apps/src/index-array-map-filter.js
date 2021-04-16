//map--filter

var list = [1, 34, 56, 78, 2, 10,55];
//doubleIt-find even numbers.

list.map(i => i * 2).filter(i => i % 2 === 0).forEach(i => console.log(i));
console.log('......')
list.map(i => i * 3).filter(i => i % 2 !== 0).forEach(i => console.log(i));
