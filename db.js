var sqlite3 = require('sqlite3').verbose()
let db = new sqlite3.Database('./db/menu.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the yume.');
  });


    module.exports = db;