import express, { Express } from 'express'
import setupMiddlewares from './middlewares'
import { RoutesApp } from '../routesLoader'

const routes = new RoutesApp()

let serverHttp = express()
setupMiddlewares(serverHttp)
serverHttp = routes.routesLoader(serverHttp)


export default serverHttp