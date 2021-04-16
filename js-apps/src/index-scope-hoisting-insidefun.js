
//hoisting inside function

function sayMessage(message) {
    if (message) {
        var name = 'foo'
        console.log(name);
    }
    console.log(name);
}
//sayMessage('hello')
sayMessage()