const mongoose = require('mongoose')

const Forum = mongoose.Schema({
  name: {
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
  }]
})

module.exports = mongoose.model('Forum', Forum)
