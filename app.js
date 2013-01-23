var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , mongoose = require('mongoose') 
  , Schema = mongoose.Schema
  , BB = require('backbone')
  , Todo = require('./public/js/models/todo')
  , fs = require('fs')
  , jobs = fs.readFileSync('data/jobs.txt', 'utf-8')
  , jJobs = eval(jobs)
  , shipmentsraw = fs.readFileSync('data/shipments.json', 'utf-8')
  , shipments = JSON.parse(shipmentsraw);

mongoose.connect("mongodb://localhost/legs",function(err){
if(err){
console.log(err)
}else{
console.log('connected to database baby!')
}
});
// Configuration
var Layout_Schema = new Schema({
  heading: String,
  text: String,
  width: Number,
  color: String,
  img: String
})

var Layout_Model = mongoose.model('Layout',Layout_Schema)

var io = require('socket.io');
var app = express()
  , server = require('http').createServer(app)
  , io = io.listen(server);

io.sockets.on('connection' , function(socket){
  console.log('socket connected')
})

server.listen(3000);

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
   app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

var myCollection = BB.Collection.extend({

  model : Todo,


    initialize : function(){
      console.log('server collection initialized')
    } 
});
var server_collection = new myCollection(jJobs)

// server_collection.each(function(model){
//   console.log(model)
// })


// for (var i = 0; i < tileArray.length; i++) {//   
//   var tile = tileArray[i]
//   var layout = new Layout_Model();
//   layout.heading = tile.heading;
//   layout.text = tile.text;
//   layout.width = tile.width;
//   layout.color = tile.color;
//     layout.img = tile.img;;
//   layout.save(function(err , doc){
//     if (err){
//       throw err;
//     }else{
//       console.log('saved!')
//     }
//   })
// };

   // console.log(jJobs)


// var data = {};
// Layout_Model.find({},function(err,doc){
//   if (err){
//     throw err;
//   }else{
//     server_collection = new _collection(doc)
//   }
// })

 app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/liveloads', function(req , res){
  res.sendfile('live.html');
});

app.get('/', function(req , res){
  res.sendfile('index.html');
});

app.get('/message', function(req , res){
  res.sendfile('message.html');
});

app.get('/test', function(req , res){
  res.sendfile('public/js/test/jasmine/index.html');
});
app.get('/security/login', function(req , res){
  res.sendfile('login.html')
});

app.get('/webmessages', function(req , res){
  res.sendfile('webmessages.html')
});

app.get('/mobile' , function(req , res){
  console.log( shipments )
  res.send( shipments );
})

app.get('/fetch', function(req , res){
 res.send( server_collection )
});


app.post('/log', function(req , res){
 res.redirect('/webmessages')
});

app.post('/updatejob' , function( req , res ){
  server_collection.each(function( model ){
    console.log( req.body.number )
        if(model.get("DeliveryNbr") == req.body.number){
          model.complete();
        }
      })
  io.sockets.emit('completeJob' ,req.body.number);
});
