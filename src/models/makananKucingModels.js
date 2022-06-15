const mongoose = require('mongoose')

const MakananKucing = mongoose.Schema({
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

module.exports = mongoose.model('MakananKucing', MakananKucing)
