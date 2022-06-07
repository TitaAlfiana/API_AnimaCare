const mongoose = require('mongoose')

const Forum = mongoose.Schema({
  nama: {
    type: String,
    require: true
  },
  title: {
    type: String,
    require: true
  },
  descript: {
    type: String,
    require: true
  },
  date: {
    type: Date, default: Date.now
  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }]
})

module.exports = mongoose.model('Forum', Forum)
