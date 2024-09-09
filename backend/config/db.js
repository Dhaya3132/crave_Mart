import mongoose from 'mongoose';

export const connectDB = async () => { mongoose.connect('mongodb+srv://dhaya:@cluster0.dgtj2.mongodb.net/food-del').then(()=> console.log('connected to db'))};