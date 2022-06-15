const express = require('express')
const {
  getAllMakananAnjing,
  postMakananAnjing,
  updateMakananAnjing,
  getMakananAnjingById,
  deleteMakananAnjing
} = require('../controllers/categoryController')

const makananAnjingRouter = express.Router()

makananAnjingRouter.get('/', getAllMakananAnjing)
makananAnjingRouter.get('/:id', getMakananAnjingById)
makananAnjingRouter.post('/', postMakananAnjing)
makananAnjingRouter.patch('/:id', updateMakananAnjing)
makananAnjingRouter.delete('/:id', deleteMakananAnjing)

module.exports = makananAnjingRouter
