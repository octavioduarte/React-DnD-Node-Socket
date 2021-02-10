export const env = {
    socketConnectionOptions: { secure: true },
    urlServerSocket: process.env.URL_SOCKET_SERVER || 'ws://localhost:8001',
    urlServerHttp: process.env.URL_HTTP_SERVER ||  'http://localhost:8000'
}