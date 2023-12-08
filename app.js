const express = require('express')
const app = express()
const devLogger = require('morgan')
require('dotenv').config()
const mongoose = require('mongoose')
const DATABASE_URL = process.env.DATABASE_URL
const connectDB = require('./connections/mongoConnect')
const PORT = process.env.PORT
const cookieParser = require('cookie-parser')
const userRouter = require('./routes/user')
const authRouter = require('./routes/auth')
const cors = require('cors')
const corsOptions = require('./config/corsOptions')

// =======================================================

connectDB(DATABASE_URL)

app.use(cookieParser)
app.use(cors(corsOptions))
app.use(devLogger("dev"))
app.use(express.urlencoded({ extended: false, limit: '50mb' }))
app.use(express.json({ limit: '50mb' }))

app.use('/', userRouter)
app.use('/auth', authRouter)

mongoose.connection.once('open', () => {
    app.listen(PORT, () => console.log(`🌎 - Listening On http://localhost:${PORT} -🌎`))
})

// =============================================================================================

module.exports = app

