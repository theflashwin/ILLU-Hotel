const express = require('express')
const router = express.Router();
const User = require("../models/user")

router.post("/register", async(req, res) => {

    const newuser = new User({name : req.body.name, email : req.body.email, password : req.body.password})

    try {
        const user = await newuser.save()
        res.send('User Registered Successfully')
    } catch (error) {
        res.status(400).json({error})
    }

})

router.post("/login", async(req, res) => {

    const {email, password} = req.body

})