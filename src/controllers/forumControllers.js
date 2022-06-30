const Forum = require('../models/forumModels')
const Comment = require('../models/commentModel')

// forum
const getAllForum = async (request, h) => {
  try {
    const forums = await Forum.find()
    h.status(200).json({
      status: 'success',
      message: 'Seluruh forum berhasil didapatkan',
      forums
    })
  } catch (e) {
    h.status(500).json({
      status: 'error',
      message: e.message
    })
  }
}

const getForumById = async (request, h) => {
  try {
    const forum = await Forum.findById(request.params.id).populate('comments').exec()
    h.status(200).json({
      status: 'success',
      message: 'Forum berhasil ditemukan',
      forum
    })
  } catch (e) {
    h.status(404).json({
      status: 'fail',
      message: 'Foum tidak ditemukan'
    })
  }
}

const postForum = async (request, h) => {
  const forum = new Forum({ nama: request.body.nama, title: request.body.title, descript: request.body.descript })

  try {
    const saveforum = await forum.save()
    h.status(201).json({
      status: 'success',
      message: 'Forum berhasil ditambahkan',
      saveforum
    })
  } catch (e) {
    h.status(400).json({
      status: 'fail',
      message: 'Forum gagal ditambahkan'
    })
  }
}

const updateForum = async (request, h) => {
  try {
    const updatedforum = await Forum.updateOne({ _id: request.params.id }, { $set: request.body })
    h.status(200).json({
      status: 'success',
      message: 'Forum berhasil diupdate',
      updatedforum
    })
  } catch (e) {
    h.status(400).json({
      status: 'fail',
      message: 'Forum gagal diupdate. Id tidak ditemukan'
    })
  }
}

const deleteForum = async (request, h) => {
  try {
    const deletedforum = await Forum.deleteOne({ _id: request.params.id })
    h.status(200).json({
      status: 'success',
      message: 'Forum berhasil dihapus',
      deletedforum
    })
  } catch (e) {
    h.status(400).json({
      status: 'fail',
      message: 'Forum gagal dihapus. Id tidak ditemukan'
    })
  }
}

// comment
const postComment = async (request, response) => {
  const comment = new Comment({ nama: request.body.nama, comment: request.body.comment })
  comment.save((err, comment) => {
    if (err) {
      console.log(err)
    } else {
      Forum.findById(request.params.id, (err, forum) => {
        if (err) {
          console.log(err)
          response.json({
            status: 'fail',
            message: 'Comment gagal ditambahkan'
          })
        } else {
          forum.comments.push(comment)
          forum.save()
          response.json({
            status: 'success',
            message: 'Comment berhasil ditambahkan',
            comment
          })
        }
      })
    }
  })
}

const deleteComment = async (request, h) => {
  const deletedcomment = await Comment.findById(request.params.id)
  console.log(deletedcomment)
  // try {
  //   h.status(200).json({
  //     status: 'success',
  //     message: 'Comment berhasil dihapus',
  //     deletedcomment
  //   })
  // } catch (e) {
  //   h.status(400).json({
  //     status: 'fail',
  //     message: 'Comment gagal dihapus. Id tidak ditemukan'
  //   })
  // }
}

// search
const searchForum = async (request, h) => {
  try {
    const forums = await Forum.find({
      $or: [
        { title: { $regex: request.params.key, $options: 'i' } },
        { descript: { $regex: request.params.key, $options: 'i' } }
      ]
    })
    h.status(200).json({
      status: 'success',
      message: 'Forum berhasil ditemukan',
      forums
    })
  } catch (e) {
    h.status(500).json({
      status: 'error',
      message: e.message
    })
  }
}

module.exports = {
  getAllForum,
  postForum,
  updateForum,
  getForumById,
  deleteForum,
  postComment,
  deleteComment,
  searchForum
}
