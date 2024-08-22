const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');

app.use(bodyParser.urlencoded({extended:false}));

app.use(adminRoutes); // here order won't do anything as shop has app.get instead of use!!!
app.use(shopRoutes);


app.listen(3000);