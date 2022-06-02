const express = require('express')
const {
  getForum,
  postForum,
  updateForum,
  getForumById,
  deleteForum
} = require('./controllers')

const router = express.Router()

router.get('/', getForum)
router.get('/:id', getForumById)
router.post('/', postForum)
router.patch('/:id', updateForum)
router.delete('/:id', deleteForum)

module.exports = router
