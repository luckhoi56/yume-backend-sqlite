
const express = require("express");
const app = express();
var cors = require('cors');
var db = require('./db.js');
const { SourceMap } = require("module");
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
   
   //data must be in form {"Category":"Smoothie"}, the option is in json to work correctly
   app.post("/test1", async(req, res, next) => {
     //console.log(req);
    const m_category = req.body.Category;
    
    var sql = `select * from menu where category ="${m_category}" `;
    params=[];
    db.all(sql,params,(err,rows) =>{
      if(err){
        res.status(400).json({"error": err.message});
        return;
      }
      res.json({
        "message":"test1 is done",
        "data":rows
      })
    })
   });
   //the input will be ether soup,smoothie,coffee,or drink and it will fetch accordingly
   app.post("/getSize", async(req, res, next) => {
    //console.log(req);
   const m_category = (req.body.Category).toLowerCase();
   
   var sql = `select * from ${m_category}size`;
   params=[];
   db.all(sql,params,(err,rows) =>{
     if(err){
       res.status(400).json({"error": err.message});
       return;
     }
     res.json({
       "message":"test1 is done",
       "data":rows
     })
   })
  });

   app.get("/test2", (req, res, next) => {
    var sql = 'SELECT  * from menu where category ="Soup" ';
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
  