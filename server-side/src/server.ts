import { env } from './env'
import { Server, Socket } from "socket.io";


const io = new Server(env.portSocketServer, env.optionsConnection);

io.on("connection", (socket: Socket) => {
    console.log(`New socket: ${socket.id}`)
});

