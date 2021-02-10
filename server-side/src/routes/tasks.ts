import { Request, Response, Router } from 'express'
import { ServiceTasks } from '../service/tasks'


const router = Router()

router.get('/get', async (_req: Request, res: Response) => {
    try {
        const tasksResult = new ServiceTasks()
        const tasks = await tasksResult.getTasks()
        res.status(200).json({ success: true, tasks })
    } catch {
        res.status(500).json({ success: false, message: 'Internal server error' })
    }
})

export default router

