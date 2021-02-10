import serverHttp from './config/appServerHttp'
import { MongoHelper } from './db';
import { env } from './env';

MongoHelper.connect(env.dbConnection)
    .then(() => {
        console.info('[SERVER HTTP] Connection to database successful')
        serverHttp.listen(env.portHttpServer, () => {
            console.info(`Server http running at port: ${env.portHttpServer}`)
        })
    })
    .catch((error: Error) => {
        console.error(`[SERVER HTTP] Error establishing a database connection: ${error.message}`)
    })


