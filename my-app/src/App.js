import logo from './logo.svg';
import './App.css';
import Home from './pages/home/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/aboutus/about';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/about" element={<About />}  />
        
      </Routes>
    </BrowserRouter>
    

  );
}

export default App;
