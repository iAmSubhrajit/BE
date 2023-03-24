const jwt = require('jsonwebtoken')
const UserModel = require('../models/userModel')
const auth = (req, res, next) => {
    const { authorization } = req.headers

    if (authorization) {
        const token = authorization.split(' ')[1]

        try {
            const userInfo = jwt.verify(token, process.env.SECRET_KEY)
            req.userId = userInfo.id
            next()
        }
        catch (error) {
            res.send(error)
        }
    }
    else
        res.send('you have to log in first')
}

const roleBasedAuthorization = (req, res, next) => {
    UserModel.findById(req.userId)
        .then(data => {
            if (data.role === 'admin' || data.role === 'superAdmin') {
                next()
            }
            else {
                res.send('you have not authorized to view')
            }
        })
        .catch(error => res.status(400).send({ message: error.message }))
}

module.exports = { auth, roleBasedAuthorization }