const express = require('express')
const {
  getAllArticle,
  postArticle,
  updateArticle,
  getArticleById,
  deleteArticle,
  searchArticle
} = require('../controllers/articleController')

const routerArticle = express.Router()

routerArticle.get('/', getAllArticle)
routerArticle.get('/:id', getArticleById)
routerArticle.post('/', postArticle)
routerArticle.patch('/:id', updateArticle)
routerArticle.delete('/:id', deleteArticle)
routerArticle.get('/search/:key', searchArticle)

module.exports = routerArticle
