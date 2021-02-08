export const env = {
    dbConnection: {
        url: 'mongodb://localhost:27017/db-drag-and-drop',
        user: 'username',
        pwd: 'password'
    },
    optionsConnection: {
        cors: {
            origin: '*'
        }
    },
    portSocketServer: 8000 || process.env.PORT,

}

