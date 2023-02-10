const express = require('express')
const router = express.Router();
const User = require("../models/user")

router.post("/register", async(req, res) => {

    const newuser = new User({name : req.query.name, email : req.query.email, password : req.query.password})

    try {
        const user = await newuser.save()
        res.send('User Registered Successfully')
    } catch (error) {
        res.status(400).json({error})
    }

})

router.post("/login", async(req, res) => {

    const email = req.query.email
    const password = req.query.password

    try {
        const user = await User.findOne({email: email, password: password})
        if(user) {
            const temp = {
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                _id: user._id
            }
            res.send(temp)
        } else {
            res.status(400).json({message: 'login failed'})
        }
    } catch(error) {
        res.status(400).json({error})
    }

})

module.exports = router