const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);



const port = 3000
var cors = require('cors')
app.use(cors())
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      socket.emit("received",msg)
    });
  });


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})