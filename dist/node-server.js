// Node Server for Heroku
'use strict';

var express = require('express'),
    app = express(),
    fs = require('fs');

var appPort = 9000;
var mainTemp;

console.log('Starting directory: ' + process.cwd());
try {
  process.chdir('./dist');
  console.log('New directory: ' + process.cwd());
}
catch (err) {
  console.log('chdir: ' + err);
}

fs.readFile('./index.html',function(err,data){
    if (err){
        throw err;
    }
    mainTemp=data;
});

app.use(express.static('./'));
app.get("*", function(req,res){
    res.writeHeader(200, {"Content-Type": "text/html"});
    res.write(mainTemp);
    res.end();
});

app.listen(appPort, function(){
    console.log("Heroku webserver");  
    console.log("Listening on port " + appPort);   
});