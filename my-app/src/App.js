import logo from './logo.svg';
import './App.css';
import Home from './pages/home/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/aboutus/about';
import Addition from './components/addition/addition';
import Contact from './components/contactus/contact';
import Product from './components/products/products';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/about" element={<About />}  />
        <Route path="/addition" element={<Addition />}  />
        <Route path="/contact" element={<Contact />}  />
        <Route path="/products" element={<Product />}  />
        <Route path="/rewiew" element={<Product />}  />
      </Routes>
    </BrowserRouter>
    

  );
}

export default App;
