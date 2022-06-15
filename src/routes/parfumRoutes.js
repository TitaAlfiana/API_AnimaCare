const express = require('express')
const {
  getAllAksesoris,
  postAksesoris,
  updateAksesoris,
  getAksesorisById,
  deleteAksesoris
} = require('../controllers/categoryController')

const aksesorisRouter = express.Router()

aksesorisRouter.get('/', getAllAksesoris)
aksesorisRouter.get('/:id', getAksesorisById)
aksesorisRouter.post('/', postAksesoris)
aksesorisRouter.patch('/:id', updateAksesoris)
aksesorisRouter.delete('/:id', deleteAksesoris)

module.exports = aksesorisRouter
