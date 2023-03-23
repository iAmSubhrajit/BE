const UserModel = require("../models/userModel")

const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')

const getUsers = (req, res) => {
    UserModel.find().select({ password: 0, _id: 0 })
        .then(data => res.send(data))
        .catch(error => res.status(400).send({ message: error.message }))
}

const getUser = (req, res) => {
    UserModel.findOne({ _id: req.params.id })
        .then(data => res.send(data))
        .catch(error => res.status(404).send({ message: error.message }))
}

const createUser = (req, res) => {
    const { password } = req.body;
    const saltRounds = bcrypt.genSaltSync(10)
    const securePassword = bcrypt.hashSync(password, saltRounds)
    UserModel.create({ ...req.body, password: securePassword })
        .then(data => res.send('user created successfully'))
        .catch(error => res.send({ message: error.message }))
}

const loginUser = (req, res) => {
    const { email, password } = req.body
    UserModel.findOne({ email })
        .then((user) => {
            //match the password
            const isPasswordMatch = bcrypt.compareSync(password, user.password);

            if (isPasswordMatch) {
                //send JWT token
                const token = jwt.sign({
                    id: user._id,
                    email: user.email
                }, process.env.SECRET_KEY)

                console.log('token', token);
                // res.send('successfully logged in')
                res.json({
                    message: 'successfully logged in',
                    token,
                })

            }
            else {
                res.send('Password is incorrect')
            }

        })
        .catch((error) => res.send(`${email} is not a valid user`))
}

const getUserProfile = (req, res) => {

    UserModel.findById(req.userId).select({ password: 0, _id: 0 })
        .then(user => res.send(user))
        .catch(err => res.send(err))


}



module.exports = {
    getUsers,
    getUser,
    createUser,
    loginUser,
    getUserProfile
}