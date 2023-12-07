const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const DATABASE_URL = process.env.DATABASE_URL
const connectDB = require('./connections/mongoConnect')
const PORT = process.env.PORT
const userRouter = require('./routes/user')
const authRouter = require('./routes/auth')


// =======================================================

connectDB(DATABASE_URL)

app.use('/', userRouter)
app.use('/auth', authRouter)

mongoose.connection.once('open', () => {
    app.listen(PORT, () => console.log(`🌎 - Listening On http://localhost:${PORT} -🌎`))
})

// =============================================================================================

module.exports = app

