const express = require('express')
const {
  getAllTasHewan,
  postTasHewan,
  updateTasHewan,
  getTasHewanById,
  deleteTasHewan
} = require('../controllers/categoryController')

const tasHewanRouter = express.Router()

tasHewanRouter.get('/', getAllTasHewan)
tasHewanRouter.get('/:id', getTasHewanById)
tasHewanRouter.post('/', postTasHewan)
tasHewanRouter.patch('/:id', updateTasHewan)
tasHewanRouter.delete('/:id', deleteTasHewan)

module.exports = tasHewanRouter
