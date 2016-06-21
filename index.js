var express = require("express");
var app = express();

var port = process.env.PORT || 5000;

app.get("/api/whoami", function(request, response) {
    var ip = request.ip;
    var language = request.headers["accept-language"];
    var os = request.headers["user-agent"];
    response.send({"ipaddress":ip,"language":language,"software":os});
});

app.get("*", function(request, response) {
  response.end("404!");
});

app.listen(port, function() {
    console.log("App listening on port " + port);
});
