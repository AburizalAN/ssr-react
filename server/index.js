import path from 'path'
import fs from 'fs'
import fetch from 'isomorphic-fetch'
import express from 'express'
import cors from 'cors'
import { storeServer } from '../src/store'
import { matchRoutes } from 'react-router'
import { ListRoutes } from '../src/Routes'
import renderer from './renderer'

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
    res.send(renderer(req, storeServer, matches))
  })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})