const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Orders")
})

app.listen(8001, () => {
    console.log("Orders Api")
})