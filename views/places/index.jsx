const React = require('react')
const Def = require('../default')

function index(data) {
  let placesFormatted = data.places.map((place) => {
    return (
      <div className='col-sm-6'>
        <h2>
          <a href={`/places/${place.id}`}>{place.name}</a>
        </h2>
        <p className='text-center'>
          {place.cuisines}
        </p>
        <img src={place.pic} alt={place.name} />
        <p className='text-center'>
          Located in {place.city}, {place.state}
        </p>
      </div>
    )
  })
  return (
    <Def>
      <main>
        <h1>Do we REST or RANT?</h1>
        <div className='row'>
          {placesFormatted}
        </div>
        <a href="/places/new">
          <button className='btn btn-primary'>Add a New Place</button>
        </a>
      </main>
    </Def>
  )
}

module.exports = index