const router = require('express').Router()
const { home } = require('../controller/homeController')

// =============================================================

router.get('/', home)

// =============================================================

module.exports = router