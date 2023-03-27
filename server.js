const express = require('express')
const app = express()
const port = 3000

const http = require('http')
const server = http.createServer(app)
const {Server} = require("socket.io")
const io = new Server(server)

app.set('view engine','ejs')

app.get("/", (req,res) => {
res.render('index')
});

io.on('connection',(socket) => {
    console.log('user connected')
    socket.on('message',(msg) => {
        socket.broadcast.emit('message',msg);

    })
})

server.listen(port , () => {console.log(`server running on port ${port}`)})


