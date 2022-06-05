const mongoose = require('mongoose')

const Article = mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  descript: {
    type: String,
    require: true
  },
  subFirstTitle: {
    type: String,
    require: true
  },
  descriptSubFirstTitle: {
    type: String,
    require: true
  },
  subSecondTitle: {
    type: String,
    require: true
  },
  descriptSubSecondTitle: {
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

module.exports = mongoose.model('Article', Article)
