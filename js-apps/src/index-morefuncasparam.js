
// function login(userName, password, success, failure) {
//     if (userName === 'admin' && password === 'admin') {
//         //send success result via function to the caller
//         success(`Login success : ${userName}`)
//     } else {
//         failure('Login failed');
//     }
// }
var login = function (userName, password, success, failure) {
    if (userName === 'admin' && password === 'admin') {
        //send success result via function to the caller
        success(`Login success : ${userName}`)
    } else {
        failure('Login failed');
    }
};

login('admin', 'admin', function (message) {
    console.log(message)
}, function (err) {
    console.log(err)
});


login('foo', 'admin', function (message) {
    console.log(message)
}, function (err) {
    console.log(err)
});