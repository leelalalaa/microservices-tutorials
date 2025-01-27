import { useState } from 'react';

const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
        name: "", 
        price: "",
        image: "", 
    });

    const handleAddProduct = () => {
        console.log(newProduct);
    }

    return <div>
        <p>Create New Product</p>
        <input type="text" placeholder="Product Name" value={newProduct.name} name="name" onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}/>
        <input type="text" placeholder="Price" value={newProduct.price} name="price" onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}/>
        <input type="text" placeholder="Image" value={newProduct.image} name="image" onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}/>
        <input type="submit" value="Submit" onClick={handleAddProduct} />
    </div>;
};

export default CreatePage; 