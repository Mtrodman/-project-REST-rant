
require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')

//Middleware
app.set(`views`, __dirname + `/views`)
app.set(`view engine`, `jsx`)
app.engine(`jsx`, require(`express-react-views`).createEngine())
app.use(express.static(`public`))
//body parser
app.use(express.urlencoded({ extended: true }))
//method override
app.use(methodOverride(`_method`))

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

module.exports = app;