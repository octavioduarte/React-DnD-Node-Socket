import { Express, Router } from 'express'
import tasksRoutes from './routes/tasks'



class RouteApp {
    loadRoutes = (app: Express) => {
        const route: Router[] = [];

        route['tasks_routes' as unknown as number] = tasksRoutes;

        app.use('/', route['tasks_routes' as unknown as number])
        return app;
    }
}

export default RouteApp;