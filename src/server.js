require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const forumRouter = require('./routes/forumRoutes')
const commentRouter = require('./routes/commentRoutes')
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
server.use('/v1/forum', forumRouter)
server.use('/v1/comment', commentRouter)

const port = process.env.PORT || 5000
server.listen(port, () => console.log(`Server berjalan pada port : ${port}`))
