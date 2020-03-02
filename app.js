var express = require('express');
var app = express();

var request = require('request');
app.set("view engine", "ejs");


app.get("/results", function(req,res){
    request("http://www.omdbapi.com/?apikey=10da437c&s=karate", function(error, response, body){
        if(!error && res.statusCode == 200){
            var data = JSON.parse(body);
            res.render("results", {data : data})
        }

    });
});



app.listen(3000, process.env.IP,function(){
    console.log('started');
})