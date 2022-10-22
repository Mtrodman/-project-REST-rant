const router = require('express').Router()

//GET /places
router.get(`/`, (req, res) => {
    let places = [{
        name: 'Henreys Coffee House',
        city: 'Osage City ',
        state: 'KS',
        cuisines: 'Coffee House',
        pic: '/images/coffee-cup.jpg'
      }, {
        name: 'Ridge Iron Grill',
        city: 'Osage City ',
        state: 'KS',
        cuisines: 'Bar & Grill',
        pic: '/images/grill-food.jpg'
      }];      
    res.render(`places`,{ places })
})

router.get('/new', (req, res) => {
    res.render('places/new')
  })
  
module.exports = router



