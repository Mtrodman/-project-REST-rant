require('dotenv').config()
const express = require('express')
const app = express()

//Middleware
app.set(`view engine`, `jsx`)
app.engine(`jsx`, require(`express-react-views`).createEngine())
//router
app.use(`/places`, require(`./controllers/places`))
//GET homepage
app.get(`/`, (req, res) => {
    res.render(`home`)
})

//404
app.get(`*`, (req, res) => {
    res.status(404).render(`error404`)
})

app.listen(process.env.PORT)
