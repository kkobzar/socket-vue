const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

const PORT = 3030

app.use('/',express.static('test-socket/dist/'))

io.on('connection',socket=>{
    socket.on('chat message', msg=>{
        console.log(`Message recieved: ${msg}`)
        io.emit('chat message', msg)
    })
})

http.listen(PORT, ()=>{
    console.log(`Server on ${PORT}`)
})
