import mongoose from 'mongoose';
import foodModel from '../models/foodModels.js';
import fs from 'fs';

// add foot item 
const addFood = async (req,res) => {
    let image_filename = `${req.file.filename}`
    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try{
        await food.save();
        res.json({success:true, message:'food added'})
    }
    catch(error){
        console.log(error);
        res.json({success:false,message:'error occured while adding'})
    }
}

const listFoods = async(req, res) => {
    try{
        const foods = await foodModel.find({});
        res.json({success:true, data:foods});
    }
    catch(error){
        console.log(error);
        res.json({success:false,message:'Error'})
    }
}

const removeFood = async (req,res) => {
    try{
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{})
        
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message:'Food Removed'});
    }
    catch(error){
        console.log(error);
        res.json({success:false,message:'error'})
    }
}

const deleteAllFood = async (req, res) => {
    try{
         await mongoose.connection.db.dropCollection("foods");
         fs.unlink(`uploads`,()=>{})
         res.status(200).send({ message: 'Database cleared successfully!' });
    }
    catch(error){
        res.status(500).send({ message: 'Error clearing the database', error });
    }
}

export {addFood, listFoods, removeFood, deleteAllFood}