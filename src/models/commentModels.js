const mongoose = require('mongoose')

const Comment = new mongoose.Schema({
  nama: {
    type: String
  },
  comment: {
    type: String
  },
  date: {
    type: Date, default: Date.now
  },

  forum: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Forum'
  }
})

module.exports = mongoose.model('Comment', Comment)
