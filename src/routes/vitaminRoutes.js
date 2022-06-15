const express = require('express')
const {
  getAllVitamin,
  postVitamin,
  updateVitamin,
  getVitaminById,
  deleteVitamin
} = require('../controllers/categoryController')

const vitaminRouter = express.Router()

vitaminRouter.get('/', getAllVitamin)
vitaminRouter.get('/:id', getVitaminById)
vitaminRouter.post('/', postVitamin)
vitaminRouter.patch('/:id', updateVitamin)
vitaminRouter.delete('/:id', deleteVitamin)

module.exports = vitaminRouter
