import { Route, Routes, Link } from 'react-router-dom';
import CreatePage from "./pages/CreatePage"; 
import HomePage from "./pages/HomePage";
import { useProductStore } from './store/product';

function App() {
  const { products } = useProductStore(); 
  return (
    <>
      <Link to="/">Home</Link> {/* Link to HomePage */}   
      <Link to="/create">Create Page</Link> {/* Link to CreatePage */}
          
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </>
  )
}

export default App;
