var express = require('express');
var path = require('path');
var app = express();
var server = require('http').Server(app);
// var io = require('socket.io')(server);
var bodyParser  = require('body-parser');



var port = 8000;

app.use(express.static(path.join(__dirname, "dist")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/account', function(request, response){
  console.log('In app post');
  console.log('In app post title ' + request.body.title);      // your JSON
  response.send(request.body);    // echo the result back
});

// app.use('/account', function(req, res) {
//    console.log('here '+req.path);
//    console.log(req);
//    console.log(req.title);
//    console.log(req.body.title);
//  });

// io.on('connection', (socket) => {
//   console.log('new connection made');

//   socket.on('send-message', (data) => {
//     console.log(data.text);
//     io.emit('message-received', data);
//   });

//    socket.on('event1', (data) => {
//       console.log(data.msg);
//     });

//    socket.emit('event2', {
//       msg: 'Server to client, do you read me? Over.'
//     });

//    socket.on('event3', (data) => {
//       console.log(data.msg);
//       socket.emit('event4', {
//         msg: 'Loud and clear :)'
//       });
//     });

// });

server.listen(port, () => {
  console.log("Listening on port " + port);
});