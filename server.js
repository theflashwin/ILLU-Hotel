const express = require('express')

const app = express()

const dbConfig = require('./db')
const roomsRoute = require("./routes/roomsRoute")
const usersRoute = require("./routes/usersRoute")

// app.use(express.json)

app.use('/api/rooms', roomsRoute)
app.use('/api/users', usersRoute)


const port = process.env.port || 4000;

app.get("/", (res, req) => {
    console.log("Hello!")
})

app.listen(port, () => console.log('server started on ' + port)) 