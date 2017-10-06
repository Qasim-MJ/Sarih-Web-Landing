//========= Requirings ==========
var express = require('express');
var app     = express();
var port = process.env.PORT || 8080 ;

//=========Configuartions=========


app.use("/css",  express.static(__dirname + '/css'));
app.use("/less",  express.static(__dirname + '/less'));
app.use("/js", express.static(__dirname + '/js'));
app.use("/images",  express.static(__dirname + '/images'));


app.get('/',function(req, res) {
	res.sendFile(__dirname + '/home.html');

});

app.get('/applandingpage',function(req, res) {
	res.sendFile(__dirname + '/applandingpage.html');

});


app.get('*',function (req,res) {

res.sendFile(__dirname + '/error404.html');

})


app.listen(port, ()=>{
	console.log('server is listening on port 8080')
}) ;
