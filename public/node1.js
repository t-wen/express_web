var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/index1.htm', function (req, res) {
    res.sendFile( __dirname + "/" + "index1.htm");
})
app.get('/process_get', function (req, res) {
    var response = {
        "WechartName":req.query.WechartName,
        "PhoneNumber":req.query.PhoneNumber,
        "Password":req.query.Password
    };
    console.log(response);
    res.end(JSON.stringify(response));
})
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})