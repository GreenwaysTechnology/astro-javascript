
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


// getUser()
//     .then(user => {
//         console.log('get User is called')
//         login(user)
//             .then(status => {
//                 console.log('login is called')
//                 showPage(status)
//                     .then(page => {
//                         console.log('show page is called');
//                     })
//                     .catch(err => console.log(err))
//             })
//             .catch(err => console.log(err))
//     })
//     .catch(err => {
//         console.log(err);
//     })
//     .finally(() => console.log('done'));

//simplified version
// getUser()
//     .then(user => {
//         console.log('get User is called')
//         return login(user);
//     })
//     .then(status => {
//         console.log('login is called')
//         return showPage(status);
//     })
//     .then(page => {
//         console.log('show page is called');
//     })
//     .catch(err => {
//         console.log(err);
//     })
//     .finally(() => console.log('done'));

getUser()
    .then(user => login(user))
    .then(status => showPage(status))
    .then(page => console.log(page))
    .catch(err => console.log(err))
    .finally(() => console.log('done'));

//using destructuring syntax
const { log } = console;
getUser()
    .then(login)
    .then(showPage)
    .then(log)
    .catch(log)
    .finally(() => log('done'));

