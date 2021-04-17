//Promise Constructor api: if you have any existing callback based programming
//you can convert to Promise 

//traditional callback based
function delay(callback) {
    setTimeout(callback, 1000, "Hello Callback")
}

//
delay(data => console.log(data));

//Promise based ; convert existing delay with promises

function delayAsync() {
    //Promise constructor
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 2000, "Hello Promise")
    });
}
delayAsync()
    .then(data => console.log(data))
    .catch(err => console.log(err))
    .finally(() => console.log('done'))
