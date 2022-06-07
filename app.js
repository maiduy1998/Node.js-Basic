const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// connect DB
const mysql = require('mysql');
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'YES',
//     database: 'lo'
// })

// db.connect((err)=>{
//  if (err){
//      throw err;}
//     console.log("mysql connection")
//  }); 

app.use(express.static('public'));
app.use("/css",express.static(__dirname + 'public/css'));
app.use("/img",express.static(__dirname + 'public/img'));
app.use("/js",express.static(__dirname + 'public/js'));

app.get('',(req,res) => {
   res.render('index' ,{text : "this is EJS"});
})

app.get('/about',(req,res) => {
    res.render('about' ,{text : "about page"});
 })



//Set views
app.set('views','./views');
app.set('views engine',"ejs");

const port =3000; // setup cổng port
app.listen(port,() => console.info(`listen port ${port}`));