const express = require('express')
const {
  getAllComment,
  postComment,
  //   updateComment,
  deleteComment
} = require('../controllers/commentControllers')

const router = express.Router()

router.get('/', getAllComment)
router.post('/', postComment)
router.delete('/:id', deleteComment)
// router.patch('/:id', async (res, req) => { await updateComment(req, res) })

module.exports = router
