var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();
    friends = [{
      name: 'Matt',
      gender: 'm'
      }, {
      name: 'Sally',
      gender: 'f'
    }];

//Allow JSON posts/puts
app.use(bodyParser.json());

app.get('/api/friends', function (req, res) {
  // res.send('Hello, world');
  res.json(friends);
});

// Start the server
var server = app.listen(process.env.PORT || 3000, function () {
 var host = server.address().address,
     port = server.address().port;

 console.log('Feclass listening at http://%s:%s', host, port);
});
