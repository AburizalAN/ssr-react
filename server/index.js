import path from 'path'
import fs from 'fs'
import axios from 'axios'
import express from 'express'
import cors from 'cors'
import proxy from 'express-http-proxy'
import { storeServer } from '../src/store'
import { matchRoutes } from 'react-router'
import { ListRoutes } from '../src/Routes'
import renderer from './renderer'

const app = express()

// const isDevelopment = process.env.NODE_ENV === 'development'
const isDevelopment = false

app.use(cors())
app.use(
  '/api',
  proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
      opts.headers['x-forwarded-host'] = 'localhost:3000';
      return opts;
    }
  })
)
app.use(express.static('./build'));
app.get('/favicon.ico', (req, res) => res.status(204));
app.get('*', (req, res) => {
  const store = storeServer(req)
  let matches = matchRoutes(ListRoutes, req.path)

  const promises = matches.map(({ route }) => {
    return route.loadData ? route.loadData(store) : null
  })

  Promise.all(promises).then(() => {
    res.send(renderer(req, store, matches))
  })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})