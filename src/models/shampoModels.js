const mongoose = require('mongoose')

const Shampo = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  image: {
    type: String,
    require: true
  },
  date: {
    type: Date, default: Date.now
  }

})

module.exports = mongoose.model('Shampo', Shampo)
