import express from "express";
import { addToCart,removeCart, getCart } from "../controllers/cartControllers.js";
import authMiddleware from "../middleware/auth.js";

const cartRouter = express.Router();

cartRouter.post('/addCart',authMiddleware,  addToCart);
cartRouter.post('/remove',authMiddleware, removeCart);
cartRouter.post('/get',authMiddleware,  getCart);

export default cartRouter;