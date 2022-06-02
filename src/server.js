const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const router = require('./routes')
const server = express()

mongoose.connect('mongodb://localhost:27017/API_AnimaCare', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const Database = mongoose.connection
Database.on('error', (error) => console.log(error))
Database.once('open', () => console.log('Database Connected'))

server.use(cors())
server.use(express.json())
server.use('/', router)

const port = process.env.PORT || 5000
server.listen(PORT, () => console.log(`Server berjalan pada port : ${port}`))
