const mongoose = require('mongoose')

const Comment = mongoose.Schema({
  nama: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Comment', Comment)
