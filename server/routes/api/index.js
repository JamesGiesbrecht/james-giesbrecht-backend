const express = require('express')

const wrhaRoutes = require('./wrha')

const router = express.Router()

router.get('/', (req, res) => {
  res.json({ message: 'Hello from API', env: process.env.NODE_ENV || 'Not set', port: process.env.PORT || 'Not set' })
})

router.use('/wrha', wrhaRoutes)

router.use((req, res) => {
  res.status(400).json({
    error: 'API does not exist',
  })
})

module.exports = router
