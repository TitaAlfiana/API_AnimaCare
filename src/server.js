require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const multer = require('multer')
const path = require('path')
const forumRouter = require('./routes/forumRoutes')
const routerArticle = require('./routes/articleRoutes')
const server = express()

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const Database = mongoose.connection
Database.on('error', (error) => console.log(error))
Database.once('open', () => console.log('Database Connected'))

const fileStorage = multer.diskStorage({
  destination: (request, file, callback) => {
    callback(null, 'images')
  },
  filename: (request, file, callback) => {
    callback(null, new Date().getTime() + '-' + file.originalname)
  }
})

const fileFilter = (request, file, callback) => {
  if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg'
  ) {
    callback(null, true)
  } else {
    callback(null, false)
  }
}

server.use(cors())
server.use(express.json())
server.use('/images', express.static(path.join(__dirname, 'images')))
server.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('image'))
server.use('/v1/forum', forumRouter)
server.use('/article', routerArticle)

const port = process.env.PORT || 5000
server.listen(port, () => console.log(`Server berjalan pada port : ${port}`))
