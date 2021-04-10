
var sayGreet = function (callback) {
    var status = callback('subramanian');
    console.log(status);
}
//hardcode values
sayGreet(function (name) {
    console.log('hai hai')
    return 'done'
});