import express from 'express';
import { addFood, listFoods, removeFood, deleteAllFood } from '../controllers/foodControllers.js';
import multer from 'multer';

const foodRouter = express.Router();

// image upload operation 
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const uploads = multer({
    storage:storage
})

foodRouter.post("/add",uploads.single("image"),addFood);
foodRouter.get('/list',listFoods);
foodRouter.post('/remove',removeFood);
foodRouter.delete('/delete',deleteAllFood)

export default foodRouter;