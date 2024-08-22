const express=require("express");

const router = express.Router();

router.use('/add-users',(req,res,next)=>{
    res.send('<form action="/users" method="POST"><input type="text" name="title" ><button type="submit" >ADD</button></form>')
});
router.post('/users' , (req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

module.exports=router;