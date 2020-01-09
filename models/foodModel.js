const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    calories:{
        type:Number,
        default : 0 ,
        validate(value){
            if(value<0) throw new Error("Negative Calories not possible");
        }
    },
    bestBefore:{
        type:Date,
        default : Date.now
    }
},{timestamps:true});

const Food = mongoose.model('Food',foodSchema);
module.exports  = Food ; 
