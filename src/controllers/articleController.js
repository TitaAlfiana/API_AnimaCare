const Article = require('../models/articleModels')

const getAllArticle = async (request, h) => {
  try {
    const articles = await Article.find()
    h.status(200).json({
      status: 'success',
      message: 'Seluruh artikel berhasil didapatkan',
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
      message: 'Artikel berhasil ditemukan',
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
  try {
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
  if (!request.file) {
    const e = new Error('image tidak ter-upload')
    e.errorStatus = 422
    throw e
  }

  const title = request.body.title
  const descript = request.body.descript
  const subFirstTitle = request.body.subFirstTitle
  const descriptSubFirstTitle = request.body.descriptSubFirstTitle
  const subSecondTitle = request.body.subSecondTitle
  const descriptSubSecondTitle = request.body.descriptSubSecondTitle
  const image = request.file.filename
  const id = request.params.id

  await Article.findById(id)
    .then(article => {
      article.title = title
      article.descript = descript
      article.subFirstTitle = subFirstTitle
      article.descriptSubFirstTitle = descriptSubFirstTitle
      article.subSecondTitle = subSecondTitle
      article.descriptSubSecondTitle = descriptSubSecondTitle
      article.image = image
      return article.save()
    })
    .then(article => {
      h.status(200).json({
        status: 'success',
        message: 'Artikel berhasil diubah',
        article
      })
    })
    .catch(err => {
      h.status(500).json({
        status: 'error',
        message: err.message
      })
    })
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

const searchArticle = async (request, h) => {
  try {
    const articles = await Article.find({
      $or: [
        { title: { $regex: request.params.key, $options: 'i' } },
        { descript: { $regex: request.params.key, $options: 'i' } }
      ]
    })
    h.status(200).json({
      status: 'success',
      message: 'Artikel berhasil ditemukan',
      articles
    })
  } catch (err) {
    h.status(500).json({
      status: 'error',
      message: err.message
    })
  }
}

module.exports = {
  getAllArticle,
  postArticle,
  updateArticle,
  getArticleById,
  deleteArticle,
  searchArticle
}
