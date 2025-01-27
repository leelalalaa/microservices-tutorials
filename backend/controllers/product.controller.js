import Product from '../models/product.model.js';

export const getProducts = async (req,res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products }); 
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" }); 
    }
};

export const putProduct = async (req,res) => {
    const {id} = req.params; 
    const product = req.body;
    
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Product Id" });
    }
    
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new:true});
        res.status(200).json({ success: true, data: updatedProduct }); 
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" }); 
    }
};

export const deleteProduct = async (req,res) => {
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
};

export const postProduct = async (req,res) => {
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
};