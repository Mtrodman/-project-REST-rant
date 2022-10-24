const router = require('express').Router()
const places = require('../models/places.js')

//GET /places
router.get(`/`, (req, res) => {
  
    res.render(`places`,{ places })
})
router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Osage City'
    }
    if (!req.body.state) {
      req.body.state = 'Kansas'
    }
    places.push(req.body)
    res.redirect('/places')
  })
  
  
router.get('/new', (req, res) => {
    res.render('places/new')
  })
  
module.exports = router



