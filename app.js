const express = require('express')
const app = express()
const devLogger = require('morgan')
const userRouter = require('./routes/user')
const authRouter = require('./routes/auth')
const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')
const DATABASE_URL = process.env.DATABASE_URL
const connectDB = require('./connections/mongoConnect')
const PORT = process.env.PORT
const cookieParser = require('cookie-parser')

// =======================================================

connectDB(DATABASE_URL)



app.use(cookieParser())
app.use(devLogger("dev"))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/', userRouter)
app.use('/auth', authRouter)

app.get('/', (req, res) => {
    try {
        res.send('hello world')
    } catch (error) {
        console.log(error);
    }
})

mongoose.connection.once('open', () => {
    app.listen(PORT, () => console.log(`🌎 - Listening On http://localhost:${PORT} -🌎`))
})


// =============================================================================================

module.exports = app

