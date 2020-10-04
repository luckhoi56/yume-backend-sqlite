const sqlite3 = require('sqlite3').verbose();
const express = require("express");
const app = express();
var cors = require('cors');
app.use(express.static("."));

app.use(express.json());
app.use(cors())
let db = new sqlite3.Database('./db/menu.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the yume.');
  });

  db.serialize(() => {
    db.each(`SELECT * from menu`, (err, row) => {
      if (err) {
        console.error(err.message);
      }
     // console.log(row.id + "\t" + row.name);
     console.log(row);
    });
  });
  
  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Close the database connection.');
  });

  app.get("/", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
   });
  
  
   
  //app.listen(4242, () => console.log('Node server listening on port 4242!'));
  const PORT = process.env.PORT || 4242;
  
  app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
  