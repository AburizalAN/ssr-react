import path from 'path'
import fs from 'fs'
import fetch from 'isomorphic-fetch'

import React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import express from 'express'
import cors from 'cors'
import serialize from 'serialize-javascript'
import { StaticRouter } from 'react-router-dom/server'
import { Provider } from 'react-redux'
import { storeServer } from '../src/store'
import { matchRoutes, renderMatches } from 'react-router'

import { ListRoutes } from '../src/Routes'

const app = express()

// const isDevelopment = process.env.NODE_ENV === 'development'
const isDevelopment = false

app.use(cors())
app.use(express.static('./build'))

app.get('/favicon.ico', (req, res) => res.status(204));

app.get('*', (req, res) => {
  const matches = matchRoutes(ListRoutes, req.path)

  const promises = matches.map(({ route }) => {
    return route.loadData ? route.loadData(storeServer) : null
  })

  Promise.all(promises).then(() => {
    const app = ReactDOMServer.renderToString(
      <Provider store={storeServer}>
        <StaticRouter location={req.url}>
          <div>
            {renderMatches(matches)}
          </div>
        </StaticRouter>
      </Provider>
    )
    
    res.send(`
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width,initial-scale=1">
          <title>This is Secret Project</title>
          <script>
            window.INITIAL_STATE = ${serialize(storeServer.getState())}
          </script>
          <script defer="defer" src="bundle.js"></script>
        </head>
        <body>
          <noscript>You need to enable JavaScript to run this app.</noscript>
          <div id="root">${app}</div>
        </body>
      </html>
    `)
  })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})