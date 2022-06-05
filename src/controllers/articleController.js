const Article = require('../models/articleModels')

const getAllArticle = async (request, h) => {
  try {
    const articles = await Article.find()
    h.status(200).json({
      status: 'success',
      articles
    })
  } catch (e) {
    h.status(500).json({
      status: 'error',
      message: e.message
    })
  }
}

const getArticleById = async (request, h) => {
  try {
    const article = await Article.findById(request.params.id)
    h.status(200).json({
      status: 'success',
      article
    })
  } catch (e) {
    h.status(404).json({
      status: 'fail',
      message: 'Artikel tidak ditemukan'
    })
  }
}

const postArticle = async (request, h) => {
  if (!request.file) {
    const e = new Error('image tidak ter-upload')
    e.errorStatus = 422
    throw e
  }

  const article = new Article({
    title: request.body.title,
    descript: request.body.descript,
    subFirstTitle: request.body.subFirstTitle,
    descriptSubFirstTitle: request.body.descriptSubFirstTitle,
    subSecondTitle: request.body.subSecondTitle,
    descriptSubSecondTitle: request.body.descriptSubSecondTitle,
    image: request.file.filename
  })
  try {
    const saveartikel = await article.save()
    h.status(201).json({
      status: 'success',
      message: 'Artikel berhasil ditambahkan',
      saveartikel
    })
  } catch (e) {
    h.status(400).json({
      status: 'fail',
      message: 'Artikel gagal ditambahkan'
    })
  }
}

const updateArticle = async (request, h) => {
  try {
    const updatedarticle = await Article.updateOne({ _id: request.params.id }, { $set: request.body })
    h.status(200).json({
      status: 'success',
      message: 'Artikel berhasil diupdate',
      updatedarticle
    })
  } catch (e) {
    h.status(400).json({
      status: 'fail',
      message: 'Artikel gagal diupdate. Id tidak ditemukan'
    })
  }
}

const deleteArticle = async (request, h) => {
  try {
    const deletedarticle = await Article.deleteOne({ _id: request.params.id })
    h.status(200).json({
      status: 'success',
      message: 'Artikel berhasil dihapus',
      deletedarticle
    })
  } catch (e) {
    h.status(400).json({
      status: 'fail',
      message: 'Artikel gagal dihapus. Id tidak ditemukan'
    })
  }
}

module.exports = {
  getAllArticle,
  postArticle,
  updateArticle,
  getArticleById,
  deleteArticle
}
