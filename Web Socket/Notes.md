- HTTP Polling: HTTP pooling reuses open connections for multiple requests to the same server, avoiding the need to reopen connections each time. This reduces delays and saves resources, improving performance. Many libraries handle HTTP pooling automatically for efficiency.

- long pooling:Long polling is a technique used in web development to maintain near-real-time communication between a client and a server without requiring WebSockets or Server-Sent Events.

> Web Socket:
- WebSocket is a communication protocol that enables persistent, full-duplex (two-way) communication between a client (like a browser) and a server over a single, long-lived connection. Unlike traditional HTTP, where each request-response interaction opens a new connection, WebSocket keeps one connection open for ongoing communication.WebSockets are commonly used for real-time web apps where immediate updates and interactivity are essential.

- ws: builtin function of js. and socket.io is a library. If there is any error in ws during communication, it doesn't try to reconnect but socket.io try reconnect. Socket support ssl, tsl etc and it works on heartbeat mechanism.

> socket for client: socket.io-client
> socket for server: socket.io

# Process of socket communication:
first there must be a http connection between client and server to do a socket connection, If there is no http connection, there is no possibility of web socket communication. If there is http connection between client and sever, then the client send request to the server to do a socket communication, if the server accept the request, it response with the 101 switching protocol. then they can do a socket communication. Note that if we want to do a socket communication, there must be a http connection.

- To make a http connection in nodejs, we use express.
- npm i express.
```javascript
const express = require("express")
const app = express()


app.listen(3000, () => {
    console.log("Server has started at port 3000");
})
```
- now, installing socket: npm i socket.io
- After getting connection string from database: - npm i mongoose