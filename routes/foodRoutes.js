const router = require('express').Router();
const Food = require('../models/foodModel');

router.get('/',async (req,res)=>{
    const foods = await Food.find({});
    try{
        res.send(foods);
    }catch(err){
        res.status(500).send(err);
    }
});

router.post('/',async (req,res)=>{
    const food = new Food(req.body);
    try{
        await food.save();
        res.send(food);
    }catch(err){
        res.status(500).send(err);
    }
});
router.delete('/:id', async (req,res)=>{
try{
   const food = await Food.findByIdAndDelete(req.params.id);
   if(!food) 
   res.status(404).send("Food not Found");
   res.status(200).send("Item Deleted Successfully!");
}catch(err){
    res.status(501).send(err);
}
});
router.patch('/:id',async (req,res)=>{
    try{
        const food = await Food.findByIdAndUpdate(req.params.id,req.body);
        //await Food.save();
        res.status(200).send("Updated Successfully");
    }catch(err){
        res.status(500).send(err);
    }
});
module.exports = router ; 