const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-users',(req,res,next)=>{
    // console.log(" 2");
    res.send('<form action="/users" method="POST"><input type="text" name="title" ><button type="submit" >ADD</button></form>')
});
app.post('/users' , (req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});
app.use('/',(req,res,next)=>{
    // console.log("1");
    res.send("<h1>hello</h1>")
});

app.listen(3000);