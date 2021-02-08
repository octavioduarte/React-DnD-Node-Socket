import { io as IO, Socket } from 'socket.io-client';
import { env } from './env'

export const socketConnection: Socket = IO(env.urlServerSocket, env.socketConnectionOptions)