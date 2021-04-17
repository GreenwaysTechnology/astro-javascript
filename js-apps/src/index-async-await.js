//async functions
const { log } = console;

async function getValue() {
    return 10; // return Promise.resolve(10)
}
console.log(getValue())
getValue()
    .then(log)
////////////////////////////////////////////////////////////////////////////////

//async ... await togther

const getUser = () => {
    //logic
    let user = { id: 1, name: 'admin' };
    //user = null;
    let error = { message: 'User not found' }
    return new Promise((resolve, reject) => {
        if (user) {
            setTimeout(resolve, 1000, user);
        } else {
            setTimeout(reject, 1000, error)
        }
    });
};
const login = user => {
    let status = 'login success'
    let error = 'login failed'
    return new Promise((resolve, reject) => {
        if (user.name === 'admin') {
            setTimeout(resolve, 1000, status);
        } else {
            setTimeout(reject, 1000, error)
        }
    });

};
const showPage = status => {
    let page = 'Admin page'
    let error = 'Guest Page'

    return new Promise((resolve, reject) => {
        if (status === 'login success') {
            setTimeout(resolve, 1000, page);
        } else {
            setTimeout(reject, 1000, error)
        }
    });

};
//process promise
async function main() {
    //using thenables
    getUser()
        .then(user => {
            console.log('get User is called')
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => console.log('done'));
    //using await 

    try {
        const user = await getUser();
        const status = await login(user);
        const page = await showPage(status);
        console.log(user, status, page);
    }
    catch (err) {
        console.log(err);
    }
    finally {
        console.log('done')
    }



}
main();
