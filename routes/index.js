const router = require('express').Router()

const userRouter = require('./userrouter')
router.use('/', userRouter)

module.exports = router