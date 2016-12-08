var WebSocketServer = require('ws').Server,
	wss = new WebSocketServer({port:8181});
wss.on('connection',function(ws){
	console.log("Client Connected");
	ws.on('message',function(message){
		console.log(message);
	})
})