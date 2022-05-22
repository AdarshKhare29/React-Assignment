const express = require('express');

const router = express.Router({ caseSensitive: false });
const UserModel = require("../model/User")

router.get('/', (req, res) => {
    UserModel.find().exec((err, result) => {
        if (err) {
            return res.status(400).json({
                message: 'No users found'
            })
        }
        return res.status(200).json(result)
    })
})

router.post('/', (req, res) => {
    let data = req.body
    let user = new UserModel(data)
    user.save((err, result) => {
        if (err) {
            return res.status(400).json({
                message: 'No users created'
            })
        }
        return res.status(200).json(result)
    })
})



module.exports = router;