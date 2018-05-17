var express = require('express');
var app = express();

app.use('/',express.static(__dirname + '/static/index.html'));
app.use('/',express.static(__dirname + '/static'));



// app.get('/', function(req,res){
//     res.sendfile(__dirname + '/static/index.html');
// });



// app.get('/', function(req,res,next){
//     res.send('one');
//     next();
// }, function(req,res,next){
//    console.log("t20");
//    next();
// });

// app.get('/a', function(req,res){
//     res.send('two');
// });

app.listen(3000, function(err){
    if(err) throw err;
    console.log("Server is running");
});
