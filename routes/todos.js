var express = require('express');
var router = express.Router();

var todos = require('../models/todo');

router.get('/' , (req , res) => {
todos.find().then( (todos)=> { 

res.json(todos);
})    
    
});

router.post('/' , ( req , res   ) =>{
   
   todos.create(req.body).then(function(fromdb ){
       res.json( fromdb );
       
   })
    .catch( function (err) {
       console.log(err);
   }) 
    
});



router.get('/:id' , ( req , res  ) =>{
           
todos.findById(req.params.id).then ( particularApi =>{

    res.json(particularApi)
    
}) .catch( function (err) {
       console.log(err);
   })         
           
});


router.put ('/:id' , (req , res )=> {
    
todos.findByIdAndUpdate(req.params.id , req.body , {new : true  })
    .then( updatename =>{
    res.json(updatename);
})
    
}); 


router.delete('/:id' , (req , res )=> {
    
    todos.findByIdAndRemove(req.params.id).then( function()  {
        res.json({ message : "deleted"});
    })
})




module.exports = router