const express = require('express')
const bodyParser = require('body-parser')
const db = require('./queries')
const app = express()
const port = 3001

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.get('/api/test', db.getTest)

app.get('/api/users', db.getUsers)
app.get('/api/users/:name', db.getUserByName)
app.post('/api/users', db.createUser)
// TODO: zamutit' tut Auth2.0 не секьюрно
app.put('/api/users/:id', db.updateUser)
app.delete('/api/users/:id', db.deleteUser)

app.get('/api/offers', db.getOffers)
app.get('/api/offers/:id', db.getOfferById)
// TODO: zamutit' tut Auth2.0 не секьюрно
app.post('/api/offers', db.createOffer)
app.put('/api/offers/:id', db.updateOffer)
app.delete('/api/offers/:id', db.deleteOffer)

app.listen(port, () => {
console.log(`App running on port ${port}.`)
})


