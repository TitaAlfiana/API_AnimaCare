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
<<<<<<< HEAD
=======
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
>>>>>>> fa61305b34d2f72870480db77cb7d1320795b5f0
  }]
})

module.exports = mongoose.model('Forum', Forum)
