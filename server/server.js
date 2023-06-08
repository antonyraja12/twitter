const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const DB = require('mysql');

const add = express();
add.use(cors());
add.use(bodyParser.json());
add.use(express.json());
add.use(express.static('public'));

let DBconnect = DB.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Dev@2001',
  database: 'twitter_base'
})
DBconnect.connect((error) => {
  (error) ? console.log(error) : console.log('DB Connected Suceessfully');

})

add.post('/registration', (request, response) => {
  let { name, email, dateofbirth, mobile, password } = request.body;

  let sql = 'insert into twitter_register (name,email,dateofbirth,mobile,password)values(?,?,?,?,?)';
  DBconnect.query(sql,[name, email, dateofbirth, mobile, password], (error, result) => {
    if (error) {
      let msg = { status: "error" };
      response.send(msg);
      
    }
    else {
      let msg = { status: "success" };
      response.send(msg);
    }
  })
})

add.post('/userlogin',(request,response)=>{
  let {email,password}=request.body;
  let sql='SELECT * FROM twitter_register WHERE email= ? AND password=?';
  DBconnect.query(sql,[email,password],(error,result)=>{
    if (error) {
      let msg = { status: "error" };
      response.send(msg);
      
    }
    else {
      let msg = { status: "success" };
      response.send(msg);
      // response.send(result);
    
    }
  })

})
add.get('/whotofollow',(request,response)=>{
  let sql='SELECT * FROM twitter_register ';
  DBconnect.query(sql,(error,result)=>{
    if(error){
      response.send("error");
    }
    else{
      response.send(result);
    }
  })
})

add.listen(4040, () => { console.log("Server Running on port no 4040") });