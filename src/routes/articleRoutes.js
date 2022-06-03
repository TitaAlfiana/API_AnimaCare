const express = require('express')
const {
  getAllArticle,
  postArticle,
  updateArticle,
  getArticleById,
  deleteArticle
} = require('../controllers/articleController')

const routerArticle = express.Router()

routerArticle.get('/', getAllArticle)
routerArticle.get('/:id', getArticleById)
routerArticle.post('/', postArticle)
routerArticle.patch('/:id', updateArticle)
routerArticle.delete('/:id', deleteArticle)

module.exports = routerArticle
