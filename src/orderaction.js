import axios from 'axios';
export const placeorder=(token,subtotal)=>async(dispatch,getState)=>{
    dispatch({type:"PLACE_ORDER_REQUEST"})
     
    try{
     const res=await axios.post('/api/orders/placeorder',{token,subtotal});
     dispatch({type:"PLACE_ORDER_SUCCESS"})
     console.log(res)
    }catch(error){
         dispatch({type:"PLACE_ORDER_FAIL"})
         console.log(error)
    }
}