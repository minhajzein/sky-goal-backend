const router = require('express').Router()
const { home } = require('../controller/homeController')
const { verifyUser } = require('../middlewares/verifyUser')

// =============================================================

router.get('/', home)

// =============================================================

module.exports = router