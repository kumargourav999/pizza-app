import React from 'react';
import { Button } from 'react-bootstrap';
import StripeCheckout from 'react-stripe-checkout';
import {useDispatch} from 'react-redux'
import { placeorder } from './orderaction';
const Checkout=({subtotal})=>{
       const dispatch=useDispatch();
    const tokenhandler=(token)=>{
        dispatch(placeorder(token,subtotal))
        console.log(token); 
    }
    return (<>
    <StripeCheckout
        amount={subtotal*100}
        shippingAddress
        token ={tokenhandler}
        stripeKey="pk_test_51NZV9kSBBCD217BgBWD3GQE5q5PgzmA2b6YPYAiE6D5cCEW4Xca6fdGHAMp5HOxWcpDNQ637OKDjn4KRHqlQZ9dT00mMBN4ll6"
        currency='INR'
    >
        <Button>Pay now</Button>
    </StripeCheckout>
    </>)
}
export default Checkout; 