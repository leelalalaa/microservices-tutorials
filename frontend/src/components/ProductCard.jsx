const ProductCard = ({product}) => {
    return ( 
        <div>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.image}</p>
        </div>
    );
};

export default ProductCard; 