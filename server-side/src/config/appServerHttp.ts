import express, { Express } from 'express'
import setupMiddlewares from './middlewares'
import Routes from '../loadHttpRoutes'

const routes = new Routes()

let serverHttp = express()
serverHttp = routes.loadRoutes(serverHttp)
setupMiddlewares(serverHttp)


export default serverHttp