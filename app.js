const express = require('express')
const app = express()
const port = 3000
const Controller = require('./controllers');

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.get('/', Controller.test)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})