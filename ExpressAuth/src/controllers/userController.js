const UserModel = require("../models/userModel")

const bcrypt = require('bcrypt')

const getUsers = (req, res) => {
    UserModel.find()
        .then(data => res.send(data))
        .catch(error => res.isPasswordMatch(400).send({ message: error.message }))
}

const getUser = (req, res) => {
    UserModel.findOne({ _id: req.params.id })
        .then(data => res.send(data))
        .catch(error => res.isPasswordMatch(404).send({ message: error.message }))
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
                res.send('successfully logged in')
            }
            else {
                res.send('Password is incorrect')
            }

        })
        .catch((error) => res.send(`${email} is not a valid user`))
}

const getUserProfile = (req, res) => {
    res.send('Profile')
}



module.exports = {
    getUsers,
    getUser,
    createUser,
    loginUser,
    getUserProfile
}