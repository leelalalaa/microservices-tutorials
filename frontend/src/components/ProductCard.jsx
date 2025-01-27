import { useProductStore } from '../store/product'; 

const ProductCard = ({product}) => {
    const { deleteProduct } = useProductStore(); 
    const handleDeleteProduct = async (pid) => {
        const {success,message} = await deleteProduct(pid); 
        if(!success) {
            console.log("it didn't work");
        } else {
            console.log("it worked");
        }
    }
    
    return ( 
        <div>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.image}</p>
            <button>edit</button>
            <button onClick={() => handleDeleteProduct(product._id)}>delete</button>
        </div>
    );
};

export default ProductCard; 