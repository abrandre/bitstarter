var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

    var fs = require('fs');
    var buf = new Buffer("");

    var talk = fs.readFileSync(index.html);
    response.send(buf.toString(talk ));



    //var txt = buf.toString('utf-8', fs.readFileSync('index.html'));
   // console.log(buf.toString( fs.readFileSync("index.html"), "utf-8"));
    //response.send('Hello World2!');

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
