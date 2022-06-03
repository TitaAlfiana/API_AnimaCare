const Comment = require('../models/commentModels')

const getAllComment = async (request, h) => {
  try {
    const comments = await Comment.find()
    h.status(200).json({
      status: 'success',
      comments
    })
  } catch (e) {
    h.status(500).json({
      status: 'error',
      message: e.message
    })
  }
}

const getCommentById = async (request, h) => {
  try {
    const comment = await Comment.findById(request.params.id)
    h.status(200).json({
      status: 'success',
      comment
    })
  } catch (e) {
    h.status(404).json({
      status: 'fail',
      message: 'Comment tidak ditemukan'
    })
  }
}

const postComment = async (request, h) => {
  const comment = new Comment(request.body)

  try {
    const saveComment = await comment.save()
    h.status(201).json({
      status: 'success',
      message: 'Comment berhasil ditambahkan',
      saveComment
    })
  } catch (e) {
    h.status(400).json({
      status: 'fail',
      message: 'Comment gagal ditambahkan'
    })
  }
}

const updateComment = async (request, h) => {
  try {
    const updatedComment = await Comment.updateOne({ _id: request.params.id }, { $set: request.body })
    h.status(200).json({
      status: 'success',
      message: 'Comment berhasil diupdate',
      updatedComment
    })
  } catch (e) {
    h.status(400).json({
      status: 'fail',
      message: 'Comment gagal diupdate'
    })
  }
}

const deleteComment = async (request, h) => {
  try {
    const deletedComment = await Comment.deleteOne({ _id: request.params.id })
    h.status(200).json({
      status: 'success',
      message: 'Comment berhasil dihapus',
      deletedComment
    })
  } catch (e) {
    h.status(400).json({
      status: 'fail',
      message: 'Comment gagal dihapus'
    })
  }
}

module.exports = {
  getAllComment,
  getCommentById,
  postComment,
  updateComment,
  deleteComment
}
