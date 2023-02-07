const mongoose = require('mongoose')

const roomSchema = mongoose.Schema({

    name : {
        type: String,
        required: true,
    },
    maxcount : {
        type: Number,
        required: true,
    },
    costperday : {
        type: Number,
        required: true
    },
    amenities : {
        type: String,
        required: true,
    },
    view : {
        type: String,
        required: true,
    },
    accessibility : {
        type: String,
        required: true,
    },
    imageurls : [],
    currentbookings : [],
    type : {
        type: String,
        required: true,
    },
    description : {
        type: String,
        required: true,
    },

}, {
    timestamps: true,
})

const roommodel = mongoose.model("room", roomSchema)

module.exports = roommodel;