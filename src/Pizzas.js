import React,{useState} from 'react';
import {Container,Card,Button,Row,Col} from 'react-bootstrap';
import { useDispatch,useSelector } from 'react-redux';
import { addtocart } from './cartaction';
import {Link} from 'react-router-dom';
const Pizzas=({pizza})=>{
  const Mycart=[];
    const [Verient,setverient]=useState("small");
    const [quantity,setquantity]=useState(1);
   const dispatch=useDispatch();
   const addtocarthandler=()=>{
    dispatch(addtocart(pizza,quantity,Verient))
   }
  
    return  (<>
    
            <Card style={{ width: '18rem' , marginTop:"30px"}}>
      <Card.Img className='pizzaimg' variant="top" src={pizza.image} />
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        <hr></hr>
        <Card.Text>
         
          <Row>
            <Col md={6}>
                <h6>varients</h6>
                <select onChange={(e)=>setverient(e.target.value)}>
                  {
                  pizza.varients.map((varient)=>(
                  <option value={varient}>{varient}</option>
                  ))
                   } 
                </select>
            </Col>
            <Col md={6}>
                <h6>quantity</h6>
                <select onChange={(e)=>setquantity(e.target.value)}>
                    {
                        [...Array(8).keys()].map((val,index)=>(
                            <option value={index+1}>{index+1}</option>
                        ))
                    }
                </select>
            </Col>
          </Row>
        </Card.Text>
        <Row>
            <Col md={6}>price: {pizza.prices[0][Verient]*quantity}/-rs</Col>
            <Col md={6}>
            <Button classname="bg-success text-white" onClick={addtocarthandler}>Add to cart</Button>
            </Col>
        </Row>
        
        
      </Card.Body>
    </Card> 
    
    
    </>)
    
  }

export default Pizzas;