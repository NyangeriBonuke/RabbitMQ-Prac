const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Notifications')
})

app.listen(8000, () => {
    console.log("Notifications APi")
})