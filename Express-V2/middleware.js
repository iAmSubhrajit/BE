//building custom middleware
const checkLogInStstus = (req, res, next) => {
    //check user
    //check password
    console.log('running checkLogInStstus in middleware');

    // if (req.path === '/products') {
    //     next()
    // }
    // else {
        res.send(`Please Login to access ${req.path}`)
    // }
}

const checkUser = (req, res, next) => {
    console.log('running ChekUser middleware');
    next()
}

module.exports = { checkLogInStstus, checkUser }