import serverHttp from './config/appServerHttp'
import { env } from './env';



serverHttp.listen(env.portHttpServer, () => {
    console.info(`Server http running at port: ${env.portHttpServer}`)
})