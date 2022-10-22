const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img class="steak" src="/images/grilling.jpg" alt="grill"/>
                </div>
                <div>
                    Photo by <a href="https://unsplash.com/@aminhasani?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">amin hasni</a> on <a href="https://unsplash.com/s/photos/grilling">uplash</a>
                </div>
                <a href="/places">
                    <button type="button" className="btn-primary">Places Page</button>
                </a>
 
            </main>
        </Def>
    )
}

module.exports = home
