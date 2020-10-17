'use strict'

const express = require('express')
const app = express()
const port = 3000

app.get('/:a/:b', (req, res) => {
  const {a, b} = req.params
  let result = parseInt(a) + parseInt(b)
  console.log(result)
  res.json({ result })
})

app.listen(port, () => {
  console.log(`Example app listening at ${port}`)
})