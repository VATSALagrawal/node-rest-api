const express = require('express');
const mongoose = require('mongoose');
const foodRouter = require('./routes/foodRoutes.js');
require('dotenv').config()
const app  = express();

app.use(express.json());
port  = process.env.PORT || 3000 ;

mongoose.connect(process.env.DB_URL , {useNewUrlParser:true});
mongoose.connection.on('connected',()=>{
    console.log("DB connected");
    if (mongoose.connection.client.s.url.startsWith('mongodb+srv')) {
        mongoose.connection.db = mongoose.connection.client.db('node-rest-api');
    }
});
app.use('/food',foodRouter);
app.listen(port , ()=>{
    console.log(`Server running on port ${port}`);
});