import express from 'express'
import dotenv from 'dotenv'
import homeRoutes from './routers/Home.Routes.js'

dotenv.config()

class App {
    constructor() {
        this.app = express()
        this.middlawares()
        this.routes()
    }

    middlawares() {
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
    }

    routes() {
        this.app.use('/', homeRoutes)
    }
}

export default new App().app