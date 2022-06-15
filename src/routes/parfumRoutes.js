const express = require('express')
const {
  getAllParfum,
  postParfum,
  updateParfum,
  getParfumById,
  deleteParfum
} = require('../controllers/categoryController')

const parfumRouter = express.Router()

parfumRouter.get('/', getAllParfum)
parfumRouter.get('/:id', getParfumById)
parfumRouter.post('/', postParfum)
parfumRouter.patch('/:id', updateParfum)
parfumRouter.delete('/:id', deleteParfum)

module.exports = parfumRouter
