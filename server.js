require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const multer = require('multer')
const forumRouter = require('./src/routes/forumRoutes')
const articleRouter = require('./src/routes/articleRoutes')
const aksesorisRouter = require('./src/routes/aksesorisRoutes')
const boxPasirRouter = require('./src/routes/boxPasirRoutes')
const kandangRouter = require('./src/routes/kandangRoutes')
const makananAnjingRouter = require('./src/routes/makananAnjingRoutes')
const makananKucingRouter = require('./src/routes/makananKucingRoutes')
const obatRouter = require('./src/routes/obatRoutes')
const parfumRouter = require('./src/routes/parfumRoutes')
const pasirRouter = require('./src/routes/pasirRoutes')
const shampoRouter = require('./src/routes/shampoRoutes')
const susuRouter = require('./src/routes/susuRoutes')
const tasHewanRouter = require('./src/routes/tasHewanRoutes')
const vitaminRouter = require('./src/routes/vitaminRoutes')
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
    cb(null, './images')
  },
  filename: (request, file, cb) => {
    cb(null, new Date().getTime() + '-' + file.originalname)
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
server.use(express.json())
// eslint-disable-next-line n/no-path-concat
server.use('/images', express.static(__dirname + '/images'))
server.use(multer({ storage: fileStorage, fileFilter }).single('image'))
server.use('/v1/forum', forumRouter)
server.use('/v1/article', articleRouter)
server.use('/v1/category/makanan-kucing', makananKucingRouter)
server.use('/v1/category/makanan-anjing', makananAnjingRouter)
server.use('/v1/category/parfum', parfumRouter)
server.use('/v1/category/vitamin', vitaminRouter)
server.use('/v1/category/kandang', kandangRouter)
server.use('/v1/category/susu', susuRouter)
server.use('/v1/category/obat', obatRouter)
server.use('/v1/category/box-pasir', boxPasirRouter)
server.use('/v1/category/pasir', pasirRouter)
server.use('/v1/category/aksesoris', aksesorisRouter)
server.use('/v1/category/shampo', shampoRouter)
server.use('/v1/category/tas-hewan', tasHewanRouter)

const port = process.env.PORT || 5000
server.listen(port, () => console.log(`Server berjalan pada port : ${port}`))
