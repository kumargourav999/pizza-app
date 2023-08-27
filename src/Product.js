import React,{useEffect} from 'react';
import Pizzas from './Pizzas';
import allpizzas from './Pizzadata';
import {Container,Row,Col} from 'react-bootstrap'
import {useDispatch,useSelector} from "react-redux"
import { Link } from 'react-router-dom';
import { getallpizza } from './pizzaaction'; 
const Product =()=>{
    const dispatch=useDispatch();
    const pizzastate=useSelector((state) =>state.getAllpizzaReducer);
    const {loading, pizzas,error}=pizzastate;
   /* useEffect(()=>{
            dispatch(getallpizza())
     },[dispatch]);*/
   
    return(<>
    
    <h1>PIZZA</h1>
    <Container >
        {loading?(<h1>...koading</h1>):error?(<h1>error fetching data</h1>):(
        <Row md={4}>
        {
            allpizzas.map((piza)=>(   
                <Col  md={4}>        
               <Pizzas pizza={piza} />
               </Col> 
            ))
            
        }
        <br></br>
       </Row> 
        )}
       </Container>
    </>)
}
export default Product;