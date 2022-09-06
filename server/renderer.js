import React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import serialize from 'serialize-javascript'
import { StaticRouter } from 'react-router-dom/server'
import { Provider } from 'react-redux'
import { renderMatches } from 'react-router'
import App from '../src/App'

const renderer = (req, store, matches) => {
  const app = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url}>
        <App routes={() => renderMatches(matches)} />
      </StaticRouter>
    </Provider>
  )
  
  return (`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>This is Secret Project</title>
        <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script defer="defer" src="bundle.js"></script>
      </head>
      <body>
        <div id="root">${app}</div>
      </body>
    </html>
  `)
}

export default renderer