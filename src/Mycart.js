import React from 'react';
import {Container,Row,Col,Button} from "react-bootstrap"
import{useSelector,useDispatch} from "react-redux"
import {FaAd, FaMinusCircle,FaPlusCircle, FaTrash} from "react-icons/fa"
import { addtocart,deletefromcart } from './cartaction';
import Checkout from './Checkout';
export const Mycart=()=>{
  const cartstate=useSelector(state=>state.cartreducer);
  const cartitems=cartstate.cartitems;
  console.log( (cartitems));
  const dispatch=useDispatch(); 
  const subtotal=cartitems.reduce((x,item)=>x+item.price,0);
  return (
    <>
    <Container>
      <Row>
        <Col>
        <h1>CART ITEMS</h1>
        <hr></hr>
        <Row>
          {
            
            cartitems.map(item => (
              
              
              <>
              <hr></hr>
              <Col md={7}>
                <h6>{item.name}[{item.variants}]</h6> 
                <h6>Price: {item.price}</h6>
                <h6>Quantity: 
                  <FaMinusCircle 
                           
                 onClick={()=>{dispatch(addtocart(item,item.quantity-1,item.variants))}} 
                />{item.quantity}
                <FaPlusCircle
                 
                onClick={()=>{dispatch(addtocart(item,item.quantity+1,item.variants))}}
                /></h6>
                
              </Col>
              <Col md={5}>
              <img alt={item.name} src={item.image} style={{"borderRadius":"20px","border":"4px solid khaki"}}  width={"150px"} height={"80px"}/>
              <FaTrash
              onClick={()=>{
                dispatch(deletefromcart(item))
              }}
              />
              </Col>
              </>
             
            ))
          }
        </Row>
        </Col>
        <Col>
        <h1>payment info</h1>
        <h5>Total:rs {subtotal} /-</h5>
        <Checkout subtotal={subtotal}/>
        </Col>
      </Row>
    </Container>
    </>
  )

}