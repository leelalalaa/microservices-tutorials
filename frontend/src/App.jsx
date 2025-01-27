import { Route, Routes } from 'react-router-dom';
import CreatePage from "./pages/CreatePage"; 
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </>
  )
}

export default App;
