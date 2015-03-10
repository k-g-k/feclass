var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    Nedb = require('nedb'),
    db = new Nedb();


//Allow JSON posts/puts
app.use(bodyParser.json());

// Specify src as the place where public files are found
app.use(express.static(__dirname + '/src'));
app.use('/dist', express.static(__dirname + '/dist'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.get('/api/friends', function (req, res) {
  // res.send('Hello, world');
  // res.json(friends);
  db.find({}, function (err, friends) {
    res.json(friends);
  });
});

app.post('/api/friends', function (req, res) {
  // friends.push(req.body);
  // res.json(req.body);
  var friend = {
   name: req.body.name,
   gender: req.body.gender,
   college: req.body.college
  };

  db.insert(friend, function (err, friendRecord) {
    if (err) {
       console.log(err);
       res.status(400).json({ message: 'Ruh roh!' });
    } else {
      res.json(friendRecord);
    }
  });
});


// Start the server
var server = app.listen(process.env.PORT || 3000, function () {
 var host = server.address().address,
     port = server.address().port;

 console.log('Feclass listening at http://%s:%s', host, port);
});
