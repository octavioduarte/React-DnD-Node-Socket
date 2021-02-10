import { env } from './env'
import { MongoHelper } from './db'
import { Server, Socket } from "socket.io";


const io: Server = new Server(Number(env.portSocketServer), env.optionsConnection);


MongoHelper.connect(env.dbConnection)
    .then(() => {
        console.info('[SERVER SOCKET] Connection to database successful')
    })
    .catch((error: Error) => {
        console.error(`[SERVER SOCKET] Error establishing a database connection: ${error.message}`)
    })


io.on("connection", (clientSocket: Socket) => {
    console.log(`New socket: ${clientSocket.id}`)

    clientSocket.on('update card position', updatedPositionCards => {
        clientSocket.broadcast.emit('event updates cards', updatedPositionCards)
    })
});

