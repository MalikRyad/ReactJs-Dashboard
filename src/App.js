import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import { BrowserRouter as Router , Route , Routes  } from "react-router-dom";
import "./app.css";
import Home from "./page/home/Home";
import UserList from "./page/userList/UserList";
import User from "./page/user/User";
import NewUser from "./page/newUser/NewUser";
import ProductList from "./page/productList/ProductList";
import Product from "./page/product/Product";
import NewProduct from "./page/newProduct/NewProduct";


function App() {
  return (
   <Router>
   
   <Topbar/>
   <div className="container">
        <Sidebar />
     
      
       
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/users" element={<UserList/>}/>
          <Route exact path="/user/:userId" element={<User/>} />
          <Route exact path="/NewUser" element={<NewUser/>} />


          <Route exact path="/products" element={<ProductList/>}/>
          <Route exact path="/product/:productId" element={<Product/>} />
          <Route exact path="/newproduct" element={<NewProduct/>} />

         
         
        </Routes>       
    
        </div>
        
  
        </Router>
  );
}

export default App;
