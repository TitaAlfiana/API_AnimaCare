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
  komentar: [{
    nama: {
      type: String,
      require: true
    },
    deskripsiKomen: {
      type: String,
      require: true
    }
  }]

})

module.exports = mongoose.model('Forum', Forum)
// module.exports = mongoose.model('Detail', Detail)
