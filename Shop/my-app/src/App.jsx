import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ButtonWrapper from "./components/ButtonWrapper";
import Register from "./pages/Register";
import OrderDetail from "./components/Orderdetail";
import PopupGfg from "./components/popup";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Order from "./components/Order";
import Infousr from "./pages/Infousr";
import UpdateProduct from "./pages/UpdateProduct";
import Wishlist from "./pages/Wishlist";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const App = () => {
 
  const user = useSelector((state) => state.user.currentUser);
  console.log(user);
  return (
    <Router>
      <Routes>
        <Route exact path="/"  element={<Home />}>
       
        </Route>
        <Route path="/products/:category/:subcategory/:subcategory2" element= {<ProductList />}/>
        <Route path="/products/:category/:subcategory" element= {<ProductList />}/>
        <Route path="/products/:category" element= {<ProductList />}/>
        <Route path="/products" element= {<ProductList />}/>
         <Route path="/product/:id" element= {<Product />}/>
         <Route path="/Home" element= {<Home />}/>
         <Route path="/info/:user:id" element= {<Infousr />}/>
         <Route path="/usr/:user_id/orders/:id_order" element= {<Order/>}/>
         <Route path="/usr/:user_id/orders" element= {<OrderDetail />}/>
         <Route path="/updatepr" element= {<UpdateProduct />}/>
         <Route path="/wishlist/:id" element= {<Wishlist />}/>

         <Route path="/login" element={user ? <Navigate to="/"/> : <Login />}/>
         <Route path="/register" element= {<Register/>}/>
        
        <Route path="/cart" element= {<Cart />}/>
       
       
     
      </Routes>
    </Router>
  );
};

export default App;