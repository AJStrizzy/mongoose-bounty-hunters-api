const mongoose = require('mongoose')

const hunterSchema = new mongoose.Schema({
    name: String,
    origin: String
})

module.exports ={
     Hungter: mongoose.model('hunters', hunterSchema)
}