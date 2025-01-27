//const express = require('express'); archaic way of doing this
import express from "express"; 
import dotenv from "dotenv";
import { connectDB } from "./config/db.js"; 
import Product from "./models/product.model.js";

dotenv.config(); 

const app = express(); 

app.use(express.json()); //middleware - allows us to accept JSON data in the req body 

app.post("/api/products", async (req,res) => {
    const { name, price, image } = req.body;
    const product = req.body; 

    if(!name || !price || !image) {
        return res.status(400).json({ success: false, message: "Please provide all fields" }); 
    }

    const newProduct = new Product(product);

    try {
        const existingProduct = await Product.findOne({name}); 
        if(!existingProduct) {
            await newProduct.save(); 
            res.status(201).json({ success: true, data: newProduct });
        } else {
            res.status(407).json({ success: false, message: "A product w this name alr exists" }); 
        }
    } catch (error) {
        console.error("Error in Create Product: ", error); 
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

app.delete("/api/products/:id", async (req,res) => {
    const {id} = req.params; 
    try {
        const deletedProduct = await Product.findByIdAndDelete(id); 
        if(!deletedProduct) {
            return res.status(404).json({ success: false, message: "Product not found" }); 
        }
        res.status(200).json({ success: true, message: "Product Deleted" });
    } catch (error) {
        res.status(404).json({ success: false, message: "Product not found" }); 
    }
});

app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000"); 
});
