//IIFE function., no name.


(function () {
    console.log('app is initalied')
})();
// iife with params

(function (name = 'default') {
    console.log(name);

})('foo');

//iife with return value

var result = (function (name = 'default') {
    return name;
})('foo');
console.log(result);
