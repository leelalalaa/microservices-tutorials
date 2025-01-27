import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <>
            <p>Current Products</p>

            <Link to="/create">no products found :(</Link>
        </>
    );
}

export default HomePage; 