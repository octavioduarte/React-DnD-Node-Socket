export const env = {
    socketConnectionOptions: { secure: true },
    urlServerSocket: process.env.URL_SOCKET_SERVER || 'ws://localhost:8000'
}