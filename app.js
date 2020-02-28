var express = require('express');
var app = express();

var request = require('request');


app.get("/results", function(req,res){
    request("http://www.omdbapi.com/?apikey=10da437c&s=iron", function(error, response, body){
        if(!error && res.statusCode == 200){
            var results = JSON.parse(body);
            res.send(results)
        }

    });
});



app.listen(3000, process.env.IP,function(){
    console.log('started');
})