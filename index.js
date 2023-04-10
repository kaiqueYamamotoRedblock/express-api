const express = require("express")
const { faker } = require('@faker-js/faker');
const app = express()

// Create route fake, return username
app.get('/username', (req, res) => {
  return res.json({
    "my_username": faker.internet.userName()
  })
})

app.listen(3000)