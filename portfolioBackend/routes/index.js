var express = require('express');
var router = express.Router();
const mysql = require('mysql');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', async (req, res, next) => {
  const connection = await mysql.createConnection({
    host: "www.josh-cross.com",
    user: "josh_cross_com_portfolio",
    database: "josh_cross_com_portfolio",
    password: "pooplop"
  })

  console.log(connection.state);


  connection.query("SELECT * FROM users", (errors, rows, fields) => {
    console.log("I think we fetched users successfully.")
    console.log(errors);
  });



  // console.log("connect: ", connect);
  const test = {
    Hello: "wordl"
  }
  const username = req.body.username;
  const password = req.body.password;
  console.log("username: " + username + " password: " + password);
  res.status(200).send({
    username: username,
    password: password,
  });
});

module.exports = router;
