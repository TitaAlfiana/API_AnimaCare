const express = require('express')
const {
  getAllBoxPasir,
  postBoxPasir,
  updateBoxPasir,
  getBoxPasirById,
  deleteBoxPasir
} = require('../controllers/categoryController')

const boxPasirRouter = express.Router()

boxPasirRouter.get('/', getAllBoxPasir)
boxPasirRouter.get('/:id', getBoxPasirById)
boxPasirRouter.post('/', postBoxPasir)
boxPasirRouter.patch('/:id', updateBoxPasir)
boxPasirRouter.delete('/:id', deleteBoxPasir)

module.exports = boxPasirRouter
