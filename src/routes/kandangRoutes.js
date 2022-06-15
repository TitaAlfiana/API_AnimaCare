const express = require('express')
const {
  getAllKandang,
  postKandang,
  updateKandang,
  getKandangById,
  deleteKandang
} = require('../controllers/categoryController')

const kandangRouter = express.Router()

kandangRouter.get('/', getAllKandang)
kandangRouter.get('/:id', getKandangById)
kandangRouter.post('/', postKandang)
kandangRouter.patch('/:id', updateKandang)
kandangRouter.delete('/:id', deleteKandang)

module.exports = kandangRouter
