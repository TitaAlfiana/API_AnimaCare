const express = require('express')
const {
  getAllSusu,
  postSusu,
  updateSusu,
  getSusuById,
  deleteSusu
} = require('../controllers/categoryController')

const susuRouter = express.Router()

susuRouter.get('/', getAllSusu)
susuRouter.get('/:id', getSusuById)
susuRouter.post('/', postSusu)
susuRouter.patch('/:id', updateSusu)
susuRouter.delete('/:id', deleteSusu)

module.exports = susuRouter
