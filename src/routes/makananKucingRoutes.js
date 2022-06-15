const express = require('express')
const {
  getAllMakananKucing,
  postMakananKucing,
  updateMakananKucing,
  getMakananKucingById,
  deleteMakananKucing
} = require('../controllers/categoryController')

const makananKucingRouter = express.Router()

makananKucingRouter.get('/', getAllMakananKucing)
makananKucingRouter.get('/:id', getMakananKucingById)
makananKucingRouter.post('/', postMakananKucing)
makananKucingRouter.patch('/:id', updateMakananKucing)
makananKucingRouter.delete('/:id', deleteMakananKucing)

module.exports = makananKucingRouter
