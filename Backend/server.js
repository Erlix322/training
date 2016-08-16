//including libraries
var express = require('express');
var https = require('https');
var http = require('http');
var bodyParser = require('body-parser');
var fs = require('fs');
var data = require('./data/data.js');

//loading server key and certificate to 
//establish TLS connections later on
/*var options = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.crt')
};*/
//initialize the express framework
var app = express();
http.createServer(app).listen(52512, function(){
    console.log('Server started and listening on localhost:3001');
});
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//apply logger to /user route
app.use('/user',function(req,res,next){
    console.log("Request on /user");
    next();
});
app.use(bodyParser.json());         // JSON-encoded bodies
app.use(bodyParser.urlencoded({     // URL-encoded bodies
  extended: true
})); 

app.get('/user',function (req,res) {
    res.send(data.user);
})

app.get('/todo',function(req,res){
    res.send(data.todo);
})

app.post('/delete',function(req,res){
    console.log(req.body);
    data.todo = data.todo.filter((x,i,todo) => {
        return x.id != req.body.id;
    });
    res.send(data.todo);
})

app.post('/todo', function(req,res){
    var todo = {
        id:Date.now(),
        title:req.body.title,
        content:req.body.content
    }
    data.todo = data.addTodo(data.todo,todo);
    console.log(req.body.title);
    res.send('Todo Added');
})







