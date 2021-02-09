export const env = {
    dbConnection: {
        url: process.env.MONGO_URL || 'mongodb://localhost:27017/db-drag-and-drop',
        user: process.env.MONGO_USER || 'username',
        pwd: process.env.MONGO_PASSWORD || 'password'
    },
    optionsConnection: {
        cors: {
            origin: process.env.CORS_ORIGIN_SERVER || '*'
        }
    },
    portHttpServer: process.env.PORT_HTTP_SERVER || 8000 ,
    portSocketServer: process.env.PORT_SOCKET_SERVER || 8001 

}

