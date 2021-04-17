

const getUser = (resolve, reject) => {
    //logic
    let user = { id: 1, name: 'admin' };
    //user = null;
    let error = { message: 'User not found' }
    if (user) {
        setTimeout(resolve, 1000, user);
    } else {
        setTimeout(reject, 1000, error)
    }
};

const login = (user, resolve, reject) => {
    let status = 'login success'
    let error = 'login failed'
    if (user.name === 'admin') {
        setTimeout(resolve, 1000, status);
    } else {
        setTimeout(reject, 1000, error)
    }
};

const showPage = (status, resolve, reject) => {
    let page = 'Admin page'
    let error = 'Guest Page'
    if (status === 'login success') {
        setTimeout(resolve, 1000, page);
    } else {
        setTimeout(reject, 1000, error)
    }
};


getUser(user => {
    console.log('getUser is called')
    //call login method
    login(user, status => {
        console.log('login  is called')
        //show page is called
        showPage(status, page => {
            console.log('Page is called')
            console.log(page)
        }, err => {
            console.log(err)
        });
    }, err => {
        console.log(err)
    });
}, err => {
    console.log(err)
});
