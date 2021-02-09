import { Express, Router } from 'express'
import tasksRoutes from './routes/tasks'



export class RoutesApp {
    routesLoader = (app: Express) => {
        const route: Router[] = [];

        route['tasks_routes' as unknown as number] = tasksRoutes;

        app.use('/tasks', route['tasks_routes' as unknown as number])
        
        return app;
    }
}
