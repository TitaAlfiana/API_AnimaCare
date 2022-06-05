const Comment = require('../models/commentModels')
const Forum = require('../models/forumModels')

const getAllComment = async (req, res) => {
  try {
    const comments = await Comment.find()
    if (!comments) {
      return res.status(404).json({
        message: 'Komentar tidak di temukan',
        success: false
      })
    }
    return res.status(200).json({
      message: 'Komentar berhasil di temukan',
      success: true,
      comments
    })
  } catch {
    res.status(500).json({
      message: 'Komentar gagal di temukan',
      success: false
    })
  }
}

const postComment = async (req, res) => {
  const comment = new Comment(req.body)
  try {
    const savecomment = await comment.save()
    return res.status(201).json({
      message: 'Komentar berhasil ditambahkan',
      success: true,
      savecomment
    })
  } catch {
    res.status(400).json({
      message: 'Komentar gagal ditambahkan',
      success: false
    })
  }
}

// const postComment = async (req, res) => {
//   const comment = new Comment({ nama: req.body.nama, comment: req.body.comment })
//   comment.save((error, result) => {
//     if (error) {
//       console.log(error)
//     } else {
//       Forum.findById(req.params.id, (error, forum) => {
//         if (error) {
//           console.log(error)
//         } else {
//           console.log('======comment=====')
//           console.log(forum.comments)
//         }
//       })
//       console.log(result)
//     }
//   })
// }

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
  postComment,
  updateComment,
  deleteComment
}
