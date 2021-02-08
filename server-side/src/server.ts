import { env } from './env'
import { MongoHelper } from './db'
import { Server, Socket } from "socket.io";


const io = new Server(env.portSocketServer, env.optionsConnection);



MongoHelper.connect(env.dbConnection)
    .then(() => {
        console.info('Connection to database successful')
    })
    .catch((error: Error) => {
        console.error(`Error establishing a database connection: ${error.message}`)
    })

io.on("connection", (socket: Socket) => {
    console.log(`New socket: ${socket.id}`)
});

