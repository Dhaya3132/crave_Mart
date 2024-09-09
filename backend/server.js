import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoutes.js';


// app configuration 
const app = express();
const PORT = 5000

// middleware 
app.use(express.json())
app.use(cors())

// connectDB
connectDB();

//api endpoints
app.use("/api/food",foodRouter);
app.use('/image',express.static('uploads'));

app.get('/',(req, res)=>{
    res.send('hello from server')
})

app.listen(PORT, ()=>{ console.log('server is running') });