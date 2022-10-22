const React = require('react')
const Def = require('./default')

function error404 () {
    return(
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img class="steak" src="/images/steak.jpg" alt="steak"/>
                </div>
                <div>
                    Photo by <a href="https://unsplash.com/@foodiman?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">iman zaker</a> on <a href="https://unsplash.com/s/photos/steak">uplash</a>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = error404