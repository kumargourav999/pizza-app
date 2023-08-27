export const addtocart=(pizza,quantity,variants)=>(dispatch,getState)=>{
      var cartitem={
        name:pizza.name,
        
        _id:pizza._id,
        image:pizza.image,
        variants:variants,
        quantity:Number(quantity),
        prices:pizza.prices,
        price:pizza.prices[0][variants]*quantity
        
      };
      if(cartitem.quantity<1)
      {
        dispatch({type:"DELETE_FROM_CART",payload:pizza})
      }
      else{
      dispatch({type:"ADD_TO_CART",payload:cartitem});
      localStorage.setItem('cartitems',JSON.stringify(getState().cartreducer,cartitem))
      }
}
export const deletefromcart=(pizza)=>(dispatch,getState)=>{
  dispatch({type:"DELETE_FROM_CART",payload:pizza})
  const cartitems=getState().cartreducer.cartitems;
  localStorage.setItem('cartitems',JSON.stringify(cartitems))
}