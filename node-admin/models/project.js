const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String},
    date_start: {type: Date},
    date_end: {type: Date},
    images: {type: Array, of: String},
    categories: {type: Array, of: String},
    languages: {type: Array, of: String},
})

const Project = mongoose.model('Project', ProjectSchema)

module.exports = {Project}