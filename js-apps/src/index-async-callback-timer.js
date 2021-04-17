//async ; callback style

function delay(callback) {
    //async api
    setTimeout(callback, 5000,'Subramanian')
}
console.log('start')
delay((data) => {
    //logic
    console.log('hello using timer',data)
});
console.log('end')