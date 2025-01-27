import express from "express";
import { postProduct } from "../controllers/product.controller.js";
import { deleteProduct } from "../controllers/product.controller.js";
import { getProducts } from "../controllers/product.controller.js";
import { putProduct } from "../controllers/product.controller.js";
const router = express.Router();

router.post("/", postProduct);

router.delete("/:id", deleteProduct); 

router.get("/", getProducts); 

router.put("/:id", putProduct);

export default router; 