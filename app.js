const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const DATABASE_URL = process.env.DATABASE_URL
const connectDB = require('./connections/mongoConnect')
const PORT = process.env.PORT


// =======================================================

connectDB(DATABASE_URL)

app.get('/', (req, res) => {
    try {
        res.send('Hello World')
    } catch (error) {
        console.log(error);
    }
})

mongoose.connection.once('open', () => {
    app.listen(PORT, () => console.log(`🌎 - Listening On http://localhost:${PORT} -🌎`))
})

// =============================================================================================

module.exports = app

