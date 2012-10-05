var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , mongoose = require('mongoose') 
  , Schema = mongoose.Schema
  , BB = require('backbone')
  , Todo = require('./public/js/models/todo')
  , fs = require('fs')
  // , jobs = fs.readFileSync('data/jobs.txt', 'utf-8'),
  //   jJobs = JSON.parse(jobs);


 

mongoose.connect("mongodb://localhost/legs",function(err){
//mongoose.connect("mongodb://shane:evaporated@staff.mongohq.com:10008/plannable",function(err){
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


var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});



var tileArray = [
  {
    heading : "Live Tile",
    text : "This is a nice new tile with no warnings!",
    width: 1,
    color: "blue",
    img: 'truck'
  },
  {
    heading : "Alert",
    text : "A shipment is running late!",
    width: 1,
    color: "red",
    img: 'truck'
  },
  {
    heading : "Delivies",
    text : "Number of deliveries currently completed",
    width: 1,
    color: "blue",
    img: 'pin'
  },
  {
    heading : "Planning for Birmingham area complete...",
    text : "Test",
    width: 1,
    color: "amber",
    img: 'truck'
  },
  {
    heading : "Live Tile",
    text : "Just a standard live tile",
    width: 2,
    color: "blue",
    img: 'truck'
  },
  {
    heading : "6 New Collections",
    text : "Another live tile",
    width: 1,
    color: "blue",
    img: 'truck'
  },
  {
    heading : "Stock levels Low in Pontefract...",
    text : "Test",
    width: 1,
    color: "success",
    img: 'pin'
  },
  {
    heading : "Live Tile",
    text : "Just a standard live tile",
    width: 1,
    color: "blue",
    img: 'truck'
  },
  {
    heading : "Live Tile",
    text : "Another live tile",
    width: 1,
    color: "blue",
    img: 'truck'
  },
  {
    heading : "4 Shipments",
    text : "Test",
    width: 2,
    color: "success",
    img: 'pin'
  },
  {
    heading : "Stock levels Low in Pontefract...",
    text : "Test",
    width: 1,
    color: "success",
    img: 'pin'
  },
  {
    heading : "Live Tile",
    text : "Just a standard live tile",
    width: 1,
    color: "blue",
    img: 'truck'
  },
  {
    heading : "Live Tile",
    text : "Another live tile",
    width: 1,
    color: "blue",
    img: 'truck'
  },
  {
    heading : "4 Shipments",
    text : "Test",
    width: 1,
    color: "success",
    img: 'pin'
  },
  {
    heading : "Stock levels Low in Pontefract...",
    text : "Test",
    width: 1,
    color: "success",
    img: 'pin'
  },
  {
    heading : "Live Tile",
    text : "Just a standard live tile",
    width: 1,
    color: "blue",
    img: 'truck'
  },
  {
    heading : "Live Tile",
    text : "Another live tile",
    width: 1,
    color: "blue",
    img: 'truck'
  },
  {
    heading : "4 Shipments",
    text : "Test",
    width: 1,
    color: "success",
    img: 'pin'
  },
  {
    heading : "Stock levels Low in Pontefract...",
    text : "Test",
    width: 1,
    color: "success",
    img: 'pin'
  },
  {
    heading : "Live Tile",
    text : "Just a standard live tile",
    width: 1,
    color: "blue",
    img: 'truck'
  },
  {
    heading : "Live Tile",
    text : "Another live tile",
    width: 2,
    color: "blue",
    img: 'truck'
  },
  {
    heading : "4 Shipments",
    text : "Test",
    width: 1,
    color: "success",
    img: 'pin'
  },
  {
    heading : "Stock levels Low in Pontefract...",
    text : "Test",
    width: 1,
    color: "success",
    img: 'pin'
  },
  {
    heading : "Live Tile",
    text : "Just a standard live tile",
    width: 1,
    color: "blue",
    img: 'truck'
  },
  {
    heading : "Live Tile",
    text : "Another live tile",
    width: 1,
    color: "blue",
    img: 'truck'
  },
  {
    heading : "4 Shipments",
    text : "Test",
    width: 1,
    color: "success",
    img: 'pin'
  },
  {
    heading : "Stock levels Low in Pontefract...",
    text : "Test",
    width: 1,
    color: "success",
    img: 'pin'
  },
  {
    heading : "Live Tile",
    text : "Just a standard live tile",
    width: 1,
    color: "blue",
    img: 'truck'
  },
  {
    heading : "Live Tile",
    text : "Another live tile",
    width: 1,
    color: "blue",
    img: 'truck'
  },
  {
    heading : "4 Shipments",
    text : "Test",
    width: 1,
    color: "success",
    img: 'pin'
  },
  {
    heading : "Stock levels Low in Pontefract...",
    text : "Test",
    width: 1,
    color: "success",
    img: 'pin'
  },
  {
    heading : "Live Tile",
    text : "Just a standard live tile",
    width: 1,
    color: "blue",
    img: 'truck'
  },
  {
    heading : "Live Tile",
    text : "Another live tile",
    width: 1,
    color: "blue",
    img: 'truck'
  },
  {
    heading : "4 Shipments",
    text : "Test",
    width: 1,
    color: "success",
    img: 'pin'
  },
  {
    heading : "Live Tile",
    text : "Just a standard live tile",
    width: 1,
    color: "blue",
    img: 'truck'
  },
  {
    heading : "Live Tile",
    text : "Another live tile",
    width: 1,
    color: "blue",
    img: 'truck'
  },
  {
    heading : "4 Shipments",
    text : "Test",
    width: 1,
    color: "success",
    img: 'pin'
  },
  {
    heading : "Live Tile",
    text : "Just a standard live tile",
    width: 1,
    color: "blue",
    img: 'truck'
  },
  {
    heading : "Live Tile",
    text : "Another live tile",
    width: 1,
    color: "blue",
    img: 'truck'
  }
]

var _collection = BB.Collection.extend({

  model : Todo,

  defaults: {
      heading : 'No heading yet!',
      text: 'when in rome!',
      width: '',
      color: '',
      img: ''
    },
    initialize : function(){
      console.log('server collection initialized')
    } 
});
var server_collection = new _collection(tileArray)
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

app.get('/', function(req , res){
  res.sendfile('index.html');
});
;
app.get('/fetch', function(req , res){
 res.send( server_collection )
});

// app.post('/post', function(req , res){
//   var p = req.body._id,
//      // d = server_collection.get(p).set({heading : "adjusted" })
//      // console.log(d)

//   res.send( req.body )
// });


var port = process.env.PORT ||3000
app.listen(port);