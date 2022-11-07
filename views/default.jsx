const React = require(`react`)


function Def (html) {
return (
    <html>
        <head>
            <title>Title</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"></link>
            <link rel="stylesheet" href="/css/style.css"/>
        </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                        <a href="/places">Resturants</a>
                        </li>
                        <li>
                        <a href="/places/new">Add a Resturant</a>
                        </li>
                    </ul>
                </nav>
               <div classname="chidren">
                {html.children}
                </div>
            </body>
        
    </html>
)
}

module.exports = Def
