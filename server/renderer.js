import React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import serialize from 'serialize-javascript'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import App from '../src/App'
import { ServerStyleSheet } from 'styled-components'
import { listRoutes } from '../src/Routes'
import { Helmet } from "react-helmet"

const sheet = new ServerStyleSheet()

const renderer = (req, store, context) => {
  const app = ReactDOMServer.renderToString(sheet.collectStyles(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App routes={() => renderRoutes(listRoutes)} />
      </StaticRouter>
    </Provider>
  ))
  const styleTags = sheet.getStyleTags()
  const helmet = Helmet.renderStatic()

  return (`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${styleTags}
      </head>
      <body>
        <div id="root">${app}</div>
        <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script defer="defer" src="bundle.js"></script>
      </body>
    </html>
  `)
}

export default renderer