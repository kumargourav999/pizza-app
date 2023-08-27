import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Home from "./Home";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Nopage from "./Nopage";
import Navbar from "./Navbar";
import Login from "./Login";
import Product from "./Product";
import { Mycart } from "./Mycart";
import  Register  from "./Register";
import Adminpannel from "./Adminpannel";
import Alluser from "./admin/Alluser";
import Allorder from "./admin/Allorder";
import Additem from "./admin/Additem";
import Allitem from "./admin/Allitem";
function App() {
  return (<>
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/cart" element={<Mycart />} />
        <Route exact path="/nopage" element={<Nopage />} />
        <Route  path="/adminpannel/*" element={<Adminpannel />} />
       
    </Routes>
  </BrowserRouter>
  
  
            
         
 </> );
}

export default App;
