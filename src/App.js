import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Blogs from './Pages/Blogs/Blogs';
import Contract from './Pages/Contract/Contract';
import Popular from './Pages/Home/Popular';
import Business from './Pages/Home/Business';
import Order from './Pages/Order/Order';



function App() {
  return (
    <div className=" max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="popular" element={<Popular />} />
        <Route path="order" element={<Order />} />
        <Route path="business" element={<Business />} />
        <Route path="contract" element={<Contract />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
