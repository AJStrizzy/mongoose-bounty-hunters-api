const mongoose = require('mongoose')
const hunterSchema = require('./hunterSchema')



const bountySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    wantedFor: {
        type: String,
        minlength: 10,
        maxlength: 200
    },
    client: String, 
    reward: {
        type: Number,
        min: 1000,
        max: 1000000
    }, 
    ship: String, 
    hunters: [hunterSchema],
    captured: {
        type: Boolean,
        default: false
    },
    lastSeen: String
})

module.exports = mongoose.model('bounties', bountySchema)
