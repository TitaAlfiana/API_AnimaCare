const express = require('express')
const {
  getAllComment,
  getCommentById,
  postComment,
  updateComment,
  deleteComment
} = require('../controllers/commentControllers')

const router = express.Router()

router.get('/', getAllComment)
router.get('/:id', getCommentById)
router.post('/', postComment)
router.patch('/:id', updateComment)
router.delete('/:id', deleteComment)

module.exports = router
