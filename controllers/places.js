const router = require('express').Router()
const db = require('../models')

//INDEX
router.get('/', (req, res) => {
  db.Place.find()
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err)
      res.status(404).render('error404')
    })
})
//POST new info to index
router.post('/', (req, res) => {
  db.Place.create(req.body)
    .then(() => {
      res.redirect('/places')
    })
    .catch(err => {
      if (err && err.name == 'ValidationError') {
        let message = 'Validation Error:'
        for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}. `
          message += `${err.errors[field].message}`
        }
        console.log('Validation error message', message)
        res.render('places/new', { message })
      }
      else {
        console.log(err)
        res.status(404).render('error404')
      }
    })
})
//get NEW info
router.get('/new', (req, res) => {
  res.render('places/new')
})

//SHOW individual place
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
    .populate('comments')
    .then(place => {
      res.render('places/show', { place })
    })
    .catch(err => {
      console.log(err)
      res.status(404).render('error404')
    })
})
//post the edits to places
router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id,req.body)
  .then(()=>{
    res.redirect(`/places/${req.params.id}`)
  })
  .catch(err => {
    console.log(err)
    res.status(404).render('error404')
  })
})
//delete places
router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id,req.params.comments)
  
  //if place has comments, then find them and delete them from the database
    .then(place => {
      console.log(req.params.comments)
      res.redirect('/places')
    })
    .catch(err => {
      console.log('err', err)
      res.render('error404')
    })
})
//edit places
router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
    .then(place => {
      res.render(`places/edit`, { place })
    })
    .catch(err => {
      res.render('error404')
    })
})
//post new comment
router.post('/:id/comment', (req, res) => {
  console.log(req.body)
  req.body.rant = req.body.rant ? true : false
  db.Place.findById(req.params.id)
    .then(place => {
      db.Comment.create(req.body)
        .then(comment => {
          place.comments.push(comment.id)
          place.save()
            .then(() => {
              res.redirect(`/places/${req.params.id}`)
            })
        })
        .catch(err => {
          res.status(404).render('error404')
        })
    })
    .catch(err => {
      res.status(404).render('error404')
    })
})
//delete comments
router.delete('/:id/comment/:commentId', (req, res) => {
  db.Comment.findByIdAndDelete(req.params.commentId)
    .then(place => {
      res.redirect(`/places/${req.params.id}`)
    })
    .catch(err => {
      console.log('err', err)
      res.render('error404')
    })
})

module.exports = router