import express, { Express } from 'express'
import setupMiddlewares from './middlewares'
import { RoutesApp } from '../routesLoader'

const routes = new RoutesApp()

let serverHttp = express()
serverHttp = routes.routesLoader(serverHttp)
setupMiddlewares(serverHttp)


export default serverHttp