const express = require('express')
const {
  getAllObat,
  postObat,
  updateObat,
  getObatById,
  deleteObat
} = require('../controllers/categoryController')

const obatRouter = express.Router()

obatRouter.get('/', getAllObat)
obatRouter.get('/:id', getObatById)
obatRouter.post('/', postObat)
obatRouter.patch('/:id', updateObat)
obatRouter.delete('/:id', deleteObat)

module.exports = obatRouter
