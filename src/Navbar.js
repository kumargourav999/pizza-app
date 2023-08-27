import React from 'react';
import { Link,Outlet } from 'react-router-dom';
import {useDispatch,useSelector} from "react-redux";
export default function Navbar(){
  const dispatch=useDispatch() 
  const cartstate=useSelector( state=>state.cartreducer)
    return(<>
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <div className="container-fluid">
    <Link className="navbar-brand fs-1 fst-italic" to='/'>Delicious </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/home'>Home </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/product'>Product</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/cart'>Cart{cartstate.cartitems.length  } </Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to='/login'>Login </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/register'>Register </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/adminpannel'>Adminpannel </Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
<Outlet/>
    </>)
}