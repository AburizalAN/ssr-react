import path from 'path'
import fs from 'fs'

import React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import express from 'express'
import cors from 'cors'

import App from '../src/App'

const app = express()

// const isDevelopment = process.env.NODE_ENV === 'development'
const isDevelopment = false

app.use(cors())
app.use(express.static('./build'))

app.get('*', (req, res) => {
  const app = ReactDOMServer.renderToString(<App name={"Abuuu"} />)
  
  res.send(`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>This is Secret Project</title>
        <script defer="defer" src="bundle.js"></script>
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">${app}</div>
      </body>
    </html>
  `)
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})