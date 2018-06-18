const express = require('express')
const app = express()

app.use(express.static('css'))
app.use(express.static('img'))
app.use(express.static('js'))
app.use(express.static('.'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
