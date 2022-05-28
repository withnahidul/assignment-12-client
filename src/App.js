import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import Users from './Pages/Dashboard/Users';
import AddProduct from './Pages/Dashboard/AddProduct';
import RequireAdmin from './Pages/Login/RequireAdmin';
import ManageProduct from './Pages/Dashboard/ManageProduct';
import Payment from './Pages/Dashboard/Payment';
import BookingPurchase from './Pages/BookingOrders/BookingPurchase';
import Orders from './Pages/BookingOrders/Orders';
import MyProfile from './Pages/Dashboard/MyProfile';
import AddReview from './Pages/Dashboard/AddReview';
import ClientReview from './Pages/Home/ClientReview';
import Contact from './Pages/Home/Contact';
import NotFound from './Pages/NotFound/NotFound';
import Blogs from './Pages/Blogs/Blogs';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/review" element={<ClientReview />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />

        <Route path="/bookingPurchase/:id" element={<RequireAuth><BookingPurchase /></RequireAuth>} />

        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyOrders />}></Route>
          <Route path="review" element={<AddReview />}></Route>
          <Route path="profile" element={<MyProfile />}></Route>
          <Route path="payment/:id" element={<Payment />}></Route>
          <Route path="users" element={<RequireAdmin><Users /></RequireAdmin>}></Route>
          <Route path="addProduct" element={<RequireAdmin><AddProduct /></RequireAdmin>}></Route>
          <Route path="manageProduct" element={<RequireAdmin><ManageProduct /></RequireAdmin>}></Route>
        </Route>
        
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
