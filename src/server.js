require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const router = require('./routes')
const server = express()

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const Database = mongoose.connection
Database.on('error', (error) => console.log(error))
Database.once('open', () => console.log('Database Connected'))

server.use(cors())
server.use(express.json())
server.use('/forum', router)

const PORT = 5000
server.listen(PORT, () => console.log(`Server berjalan pada port : ${PORT}`))
