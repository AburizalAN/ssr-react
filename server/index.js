import path from 'path'
import fs from 'fs'

import React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import express from 'express'

import App from '../src/App'

const PORT = process.env.PORT || 3000
const app = express()

const isDevelopment = process.env.NODE_ENV === 'development'

app.get('/', (req, res) => {
  console.log("isDevelopment: ", isDevelopment)
  const app = ReactDOMServer.renderToString(<App />)
  const indexFile = path.resolve(isDevelopment ? './public/index.html' : './build/index.html')

  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.log('Something went wrong:', err)
      return res.status(500).send('Oops, better luck next time!')
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    )
  })
})

app.use(express.static('./build'))

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})