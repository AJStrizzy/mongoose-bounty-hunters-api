require('dotenv').config()
const models = require('./models')

// models.Bounty.create({
//     name: 'Yosemite Sam',
//     wantedFor: 'Murder',
//     client: 'Warner Bros', 
//     reward: 3000, 
//     ship: 'SS.Trouble', 
//     hunters: ['Bugs Bunny', 'Toucan Sam'],
//     captured: false,
//     lastSeen: 'Uknown'
// })

models.Bounty.deleteMany().then(() => {
    console.log('removed')
})