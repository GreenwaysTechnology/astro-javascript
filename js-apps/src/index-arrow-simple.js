
//es 5 function expression syntax
var hai = function () {
    console.log('hai');
};
hai();
//arrow will replace the above one.

var hello = () => {
    //function body
    console.log('hello');
};
hello();

//if function body has one line of code, we can remove {}
hello = () => console.log('hello');
hello();

///arrow and parameters ; more parameter with default value.

var add = (a = 0, b = 0) => {
    var result = a + b;
    console.log('add', result);

};
add(10, 10);
///arrow and parameters ; single parameter with out default value,you can remove()
var getStock = value => console.log(`Stock Value ${value}`)
getStock(100)
//////////////////////////////////////////////////////////////
//arrow functions and return
var getName = () => {
    return 'Subramanian';
};
console.log(getName())
//if function has only return statement, you can remove {} and return statement
getName = () => 'Subramanian';
console.log(getName())

/////////////////
//if function recieves single input,without default value and return the same
var myfunc = input => input;
console.log(myfunc('hello'))
