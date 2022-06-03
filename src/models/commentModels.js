const mongoose = require('mongoose')

const Comment = mongoose.Schema({
  nama: {
    type: String,
    require: true
  },
  comment: {
    type: String,
    require: true
  },
  date: {
    type: Date, default: Date.now
  }
})

module.exports = mongoose.model('forumComment', Comment)
