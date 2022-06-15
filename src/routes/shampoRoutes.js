const express = require('express')
const {
  getAllShampo,
  postShampo,
  updateShampo,
  getShampoById,
  deleteShampo
} = require('../controllers/categoryController')

const shampoRouter = express.Router()

shampoRouter.get('/', getAllShampo)
shampoRouter.get('/:id', getShampoById)
shampoRouter.post('/', postShampo)
shampoRouter.patch('/:id', updateShampo)
shampoRouter.delete('/:id', deleteShampo)

module.exports = shampoRouter
