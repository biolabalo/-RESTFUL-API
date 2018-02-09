var express = require('express');
    var app  = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

 var  mongoose = require('mongoose');
 mongoose.set('debug' , true );

 var todoRoutes = require('./routes/todos');

 const Todo = require('./models/todo');






//// Map global promise - get rid of warning
mongoose.Promise = global.Promise;
// Connect to mongoose
mongoose.connect('mongodb://localhost/todos', {
  useMongoClient: true
})
  .then( () => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));




////
app.get('/' , (req , res ) => {
    res.send( ` hello from roooooootttt `);
    
 });
////////
app.use ('/api/todos' , todoRoutes);
/////////
app.get('/as', ( req , res ) => {
    
   res.send( [  "ehehbve" ,"nejhbjurefre" , "wejwuew" , { name : "biola"}]) 
    
});













app.listen( process.env.port || 5000 , ()=> {

console.log (`server has started on port 5000`);
});