const mongoose = require('mongoose')

var mongoURL = "mongodb+srv://ashwin:ashwin@cluster0.fmupqcr.mongodb.net/illu-rooms";

mongoose.connect(mongoURL);

var connection = mongoose.connection;

connection.on('error', () => {
    console.log('MongoDB Connection Failure')
})

connection.on('connected', () => {
    console.log('MongoDB Connection Success')
})

module.exports = mongoose;