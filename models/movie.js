var mongoose = require('mongoose')
var MonvieSchema = require('../schemas/movie')
var Movie = mongoose.model('Movie', MonvieSchema)

module.exports = Movie