const PlayerModel = require("../models/playerModel")

const GetPlayers = (req, res) => {
    // PlayerModel.find()

    //find score > value
    // PlayerModel.find({ score: { $gt: 50 } })  //>50

    //score < value
    // PlayerModel.find({ score: { $lt: 50 } })   // <50

    //score >= value
    // PlayerModel.find({ score: { $gte: 50 } })   //>=50

    //score <= value
    // PlayerModel.find({ score: { $lte: 50 } })   //<=50
    //     .then(data => res.send(data))
    //     .catch(err => res.send({ Error: err.message }))

    //score in 
    // PlayerModel.find({ score: { $in: [50, 26, 30] } })   // if player have score 50/ 26/30 
    //score not-in
    // PlayerModel.find({ score: { $nin: [50, 26, 30] } })   //dont show if score 50/ 26/30
    // PlayerModel.find({ score: { $nin: [50] } })   //dont show if score 50
    // score != value
    // PlayerModel.find({ score: { $ne: 50 } })   // !=50
    // .then(data => res.send(data))
    // .catch(err => res.send({ Error: err.message }))

    //using Logical operator 
    // PlayerModel.find({ $and: [{ team: 'south africa' }, { score: 50 }] }) //AND operator
    // PlayerModel.find({ $or: [{ team: 'south africa' }, { score: 55 }] }) //OR operator
    //     .then(data => res.send(data))
    //     .catch(err => res.send({ Error: err.message }))


    //using RegEx
    // PlayerModel.find({ team: { $regex: 'india|england' } }) //case sensitive
    //neglet cases
    // PlayerModel.find({ team: { $regex: 'India|England', $options: 'i' } }) //not case sensitive
    // PlayerModel.find({ team: { $regex: /dia/, $options: 'i' } }) //search dia in teans
    //search names starts with k
    PlayerModel.find({ name: { $regex: /^K/, $options: 'i' } })
    //search teams ends with ni
    // PlayerModel.find({ name: { $regex: /ni$/, $options: 'i' } })
        .then(data => res.send(data))
        .catch(err => res.send({ Error: err.message }))
}

//create multiple doduments at  once
const CreateMultiplePlayer = (req, res) => {
    //req.body should be an array
    PlayerModel.insertMany(req.body)
        .then(data => res.send(data))
        .catch(err => res.send({ Error: err.message }))
}

module.exports = { GetPlayers, CreateMultiplePlayer }