require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const multer = require('multer')
// const path = require('path')
const forumRouter = require('./src/routes/forumRoutes')
const commentRouter = require('./src/routes/commentRoutes')
const articleRouter = require('./src/routes/articleRoutes')
const server = express()

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const Database = mongoose.connection
Database.on('error', (error) => console.log(error))
Database.once('open', () => console.log('Database Connected'))

const fileStorage = multer.diskStorage({
  destination: (request, file, cb) => {
    cb(null, 'images')
  },
  filename: (request, file, cb) => {
    cb(null, null, new Date().getTime() + '-' + file.originalname)
  }
})

const fileFilter = (request, file, cb) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ) {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

server.use(cors())
server.use((request, response, next) => {
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  next()
})
server.use(express.json())
// eslint-disable-next-line n/no-path-concat
server.use(express.static(__dirname + '/images'))
server.use(multer({ storage: fileStorage, fileFilter }).single('image'))
server.use('/v1/forum', forumRouter)
server.use('/v1/comment', commentRouter)
server.use('/v1/article', articleRouter)

const port = process.env.PORT || 5000
server.listen(port, () => console.log(`Server berjalan pada port : ${port}`))
