const Forum = require('../models/forumModels')

const getAllForum = async (request, h) => {
  try {
    const forums = await Forum.find()
    h.status(200).json({
      status: 'success',
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
    const forum = await Forum.findById(request.params.id)
    h.status(200).json({
      status: 'success',
      forum
    })
  } catch (e) {
    h.status(404).json({
      status: 'fail',
      message: 'Forum tidak ditemukan'
    })
  }
}

const postForum = async (request, h) => {
  const forum = new Forum(request.body)

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

module.exports = {
  getAllForum,
  postForum,
  updateForum,
  getForumById,
  deleteForum
}
