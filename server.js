const express = require('express')
const app = express()
require('dotenv').config()

const models = require('./models')

app.get('/', (req, res) => {
    res.send('Hello from root')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`)
})