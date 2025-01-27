import { Link } from 'react-router-dom';
import { useEffect } from 'react'; 
import { useProductStore } from '../store/product'; 
import ProductCard from '../components/ProductCard.jsx';

const HomePage = () => {
    const { fetchProducts, products } = useProductStore();

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    console.log("products", products);

    return (
        <>
            <p>Current Products</p>
            {products.map((product) => (
                <ProductCard key={product._id} product={product} /> 
            ))}
            <Link to="/create">no products found :(</Link>
        </>
    );
}

export default HomePage; 