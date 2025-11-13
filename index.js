const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.post('/login', (req, res) => {
  console.log({ loginRequestFromOutside: req.body})
  const username = req.body.username
  res.send('login berhasil, Hallo ' + username )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})