const { updateMany, insertMany } = require("../models/userModel")
const userModel = require("../models/userModel")

const getAllUserList = (req, res) => {
    // userModel.find().select('-password')
    // userModel.find().select({ password: 0 })
    //     .then(data => res.send(data))
    //     .catch(error => res.status(400).send({ message: error.message }))

    //pagination
    //  using 3rd party liabrary
    const { limit, page } = req.query
    userModel.paginate({ email: { $regex: /^s/, $options: 'i' } }, { limit, page })
        .then(data => res.send(data))

}

const getSingleUser = (req, res) => {
    // userModel.find({ _id: req.params.id }).select({ password: 0 })
    //     .then(data => res.send(...data))
    // userModel.findOne({ _id: req.params.id }).select({ password: 0 })
    //     .then(data => res.send(data))
    userModel.findById(req.params.id).select(['-password'])
        .then(data => res.send(data))
        .catch(error => res.status(404).send({ message: error.message }))
}

//create User
const createUser = (req, res) => {
    userModel.create(req.body)
        .then(data => res.send(data))
        .catch(error => res.status(400).send({ message: error.message }))
}

//update user
const updateUser = (req, res) => {
    // userModel.updateOne({ _id: req.params.id }, req.body, { returnDocument: true })
    userModel.findByIdAndUpdate(req.params.id, req.body, { returnOriginal: false }) //{new: true} - also gives new updated document
        .then(data => res.send(data))
        .catch(error => res.status(404).send({ message: error.message }))


}
//for PUT req
const updateUser1 = (req, res) => {
    userModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        upsert: true,//it will create data if not found
    }).then(data => res.send(data))
        .catch(error => res.status(404).send({ message: error.message }))


}

//Delete user
const deleteUser = async (req, res) => {
    // userModel.deleteOne({ _id: req.params.id })
    // userModel.findByIdAndDelete(req.params.id)
    //     .then(data => res.send(`user named ${data.name} deleted`))
    //     .catch(error => res.status(404).send({ message: error.message }))
    const { id } = req.params;
    try {
        const result = await userModel.findByIdAndDelete(id)
        res.send('user successfully deleted')

    }
    catch (err) {
        res.send('error while deleting user', err)
    }
}

// for multiple operations at once ->updateMany(), deleteMany(), insertMany()




module.exports = { getAllUserList, getSingleUser, createUser, updateUser, updateUser1, deleteUser }