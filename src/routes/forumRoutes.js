const express = require('express')
const {
  getAllForum,
  postForum,
  updateForum,
  getForumById,
  deleteForum,
  postComment
} = require('../controllers/forumControllers')

const router = express.Router()

router.get('/', getAllForum)
router.get('/:id', getForumById)
router.post('/', postForum)
router.post('/:id/comment', postComment)
router.patch('/:id', updateForum)
router.delete('/:id', deleteForum)

module.exports = router
