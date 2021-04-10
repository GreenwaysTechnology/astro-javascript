
function doStuff(callback) {
    if (typeof callback === 'function') {
        callback();
    } else {
        console.log('Wrong type ')
    }

}
doStuff(function () {
    console.log('done')
})
doStuff('foo')