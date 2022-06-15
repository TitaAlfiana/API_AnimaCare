const express = require('express')
const {
  getAllPasir,
  postPasir,
  updatePasir,
  getPasirById,
  deletePasir
} = require('../controllers/categoryController')

const pasirRouter = express.Router()

pasirRouter.get('/', getAllPasir)
pasirRouter.get('/:id', getPasirById)
pasirRouter.post('/', postPasir)
pasirRouter.patch('/:id', updatePasir)
pasirRouter.delete('/:id', deletePasir)

module.exports = pasirRouter
