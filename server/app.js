const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '.env') })
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const { public } = require('./util/path')

const app = express()
const PORT = process.env.PORT || 3001
const { MONGODB_URL } = process.env

const mainRoutes = require('./routes/main')
const apiRoutes = require('./routes/api/index')
const userRoutes = require('./routes/user')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(public))
app.set('trust proxy', true)
app.use((req, res, next) => {
  const ip = req.header('x-forwarded-for') || req.connection.remoteAddress
  req.ip = ip
  next()
})

app.use('/api', apiRoutes)
app.use(userRoutes)
app.use(mainRoutes)

mongoose.connect(MONGODB_URL)
  .then((result) => console.log('Connected to MongoDB'))
  .catch((error) => console.log(error))

// eslint-disable-next-line no-console
console.log(`Server is live on port ${PORT}`)
app.listen(PORT)
