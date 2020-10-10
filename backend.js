
const express = require("express");
const app = express();
var cors = require('cors');
var db = require('./db.js');
app.use(express.static("."));

app.use(express.json());
app.use(cors())



  

  app.get("/menuItem", (req, res, next) => {
    var sql = 'SELECT * from menu';
    var params=[];
    db.all(sql,params,(err,rows) =>{
      if(err){
        res.status(400).json({"error": err.message});
        return;
      }
      res.json({
        "message":"success",
        "data":rows
      })
    })
    
   });
  
   app.get("/menuCategory", (req, res, next) => {
    var sql = 'SELECT distinct category from menu';
    var params=[];
    db.all(sql,params,(err,rows) =>{
      if(err){
        res.status(400).json({"error": err.message});
        return;
      }
      res.json({
        "message":"success",
        "data":rows
      })
    })
    
   });
   
  //app.listen(4242, () => console.log('Node server listening on port 4242!'));
  const PORT = process.env.PORT || 4242;
  
  app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
  