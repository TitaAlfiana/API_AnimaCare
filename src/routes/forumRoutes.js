const express = require('express')
const {
  getAllForum,
  postForum,
  updateForum,
  getForumById,
  deleteForum,
  postComment,
  deleteComment,
  searchForum
} = require('../controllers/forumControllers')

const router = express.Router()

router.get('/', getAllForum)
router.get('/:id', getForumById)
router.post('/', postForum)
router.patch('/:id', updateForum)
router.delete('/:id', deleteForum)
router.post('/:id/comment', postComment)
router.delete('/:id/comment/:commentId', deleteComment)
router.get('/search/:key', searchForum)

module.exports = router
