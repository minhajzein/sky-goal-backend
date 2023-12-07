const router = require('express').Router()
const { signup, login, logout, refresh } = require('../controller/authController')

// ==================================================================

router.post('/signup', signup)
router.post('/login', login)
router.get('/logout', logout)
router.get('/refresh', refresh)

// ==================================================================

module.exports = router