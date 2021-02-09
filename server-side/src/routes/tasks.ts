import express, { Request, Response } from 'express'


const router = express.Router()

router.get('/tasks', (req: Request, res: Response) => {
    res.json({ message: 'Hello, this is route to get tasks ;)' })
})

export default router

