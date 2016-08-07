//including libraries
var express = require('express');
var https = require('https');
var bodyParser = require('body-parser');
var fs = require('fs');
var data = require('./data/data.js');

//loading server key and certificate to 
//establish TLS connections later on
var options = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.crt')
};
//initialize the express framework
var app = express();
https.createServer(options, app).listen(3000, function(){
    console.log('Server started and listening on localhost:3000');
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







