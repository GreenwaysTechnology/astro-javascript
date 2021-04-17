
//Promise object creation: Factory apis;

function getSuccess() {
    return Promise.resolve('Success');
}
function getFailure() {
    return Promise.reject('failed');
}
// const p = getSuccess();
// console.log(p);
// p.then(data => console.log(data));

const getUser = () => {
    let user = { id: 1, name: 'admin' };
    //user = null;
    if (user) {
        return Promise.resolve('User found')
    } else {
        return Promise.reject('User not Found')
    }
}


console.log('start')

getSuccess()
    .then(data => console.log(data));

getFailure()
    .catch(err => console.log(err))

getUser()
    .then(user => console.log(user))
    .catch(err => console.log(err));

console.log('end')