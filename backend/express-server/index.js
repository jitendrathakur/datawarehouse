var express = require('express');
var fs = require('fs');
var cors= require('cors');
var app = express();
app.use(cors());
app.use(express.json());


app.post('/login', function (req, res) {
    
    console.log(req.body);
    if(req.body.server_name == "test" &&
    req.body.user_name == "test" &&
    req.body.password == "test") {
        res.send(JSON.stringify('success'));

    } else {
        res.send(JSON.stringify('invalid'));
    }
   
})

app.post('/download', function (req, res) {
    
    console.log(req.body);

    
    if(req.body.database_name === "test" &&
    req.body.table_name === "test" &&
    req.body.location === "test" &&
    req.body.format === "test") {
        res.send(JSON.stringify('Download'));

    } else {
        res.send(JSON.stringify('invalid'));
    }
  
})

app.listen(4000, function () {
    console.log('Server running on port 4000');
});

