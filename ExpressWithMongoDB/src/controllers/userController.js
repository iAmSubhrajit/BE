const User = require("../models/userModel")

//read operation
const getAllUsers = (req, res) => {
    //query
    const { username, age } = req.query
    if (username && age) {
        User.findOne({ username, age })
            .then(data => res.send(data))
            .catch((err) => {
                res.status(400).send({ message: err.message })
            })
    }
    else if (username) {
        User.findOne({ username })
            .then(data => res.send(data))
            .catch((err) => {
                res.status(400).send({ message: err.message })
            })
    }
    else if (age) {
        User.findOne({ age })
            .then(data => res.send(data))
            .catch((err) => {
                res.status(400).send({ message: err.message })
            })
    }
    else {
        //get all users
        User.find()
            .then(d => res.send(d))
            .catch(e => res.send({ message: e.message }))
    }
}

const getUserByUserName = (req, res) => {
    const { username } = req.params
    //find returns array of documents matching the condition
    // User.find({ username }) //{username(db):username(params)}
    // .then((data) => res.send(...data))

    //findOne returns single document that matches condition
    //and returns first document that matches condition
    // User.findOne({ username })
    //     .then((data) => res.send(data))
    //     .catch((error) => res.status(400).send({ message: error.message }))

    //to show/remove specific field from document
    // User.find({ username }).select('username email age')
    // User.find({ username }).select('-password') // '-' => remove field
    // User.find({ username }).select({ username: 1, age: 1 }) // 1-show
    User.find({ username }).select({ password: 0 }) //0 => remove
        .then((data) => res.send(data))
        .catch((error) => res.status(400).send({ message: error.message }))

    //limit the no of document returned
    // User.find({ username })
    //     .select({ password: 0 })
    //     .limit(1) //first 1 document from top
    //     .then((data) => res.send(data))
    //     .catch((error) => res.status(400).send({ message: error.message }))

    //skips the no of document from top
    // User.find({ username })
    //     .skip(1) //skip 1 document from top
    //     .then((data) => res.send(data))
    //     .catch((error) => res.status(400).send({ message: error.message }))

    //count document
    // User.find({ username })
    //     // .countDocuments()
    //     .count()
    //     .then((userCount) => res.send({ count: userCount }))
    //     .catch((error) => res.status(400).send({ message: error.message }))

}


//create operation
const createUser = (req, res) => {
    // console.log("user create", req.body);
    //create - create single user
    User.create(req.body)
        //returns promise
        .then(data => res.send(data))
        .catch(err => res.send({ Error: err.message }))

}
//Create multiple document at once
//see in player controller

// Arithmatic operator - <, >, <=, >= and Logical oper.  AND, OR, NOR, NOT
//also see in playerController

//update operation
const updateUserByID = (req, res) => {
    const { id } = req.params
    // User.findByIdAndUpdate(id, { $set: req.body })
    //     .then(data => res.send('User updated'))
    //     .catch(err => res.send({ Error: err.message }))
    User.updateOne({ _id: id }, req.body)
        .then(data => res.send('User updated'))
        .catch(err => res.send({ Error: err.message }))

}


//delete operation

const deleteUserByUserName = (req, res) => {
    const { username } = req.params
    User.deleteOne({ username })
        .then(d => res.send(d))
}

module.exports = { getAllUsers, createUser, getUserByUserName, deleteUserByUserName, updateUserByID }