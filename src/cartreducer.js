 export const cartreducer=(state={cartitems:[]},action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            const alreadyexist=state.cartitems.find((item)=>item._id===action.payload._id);
            if(alreadyexist){
                return {   
             ...state,
             cartitems:state.cartitems.map(item=>item._id===action.payload._id?action.payload:item)
            };
            }
            else{
                return {
                    ...state,
                  cartitems:[...state.cartitems, action.payload]
                };
            }
        case "DELETE_FROM_CART":
            return {
                ...state,
                cartitems:state.cartitems.filter(item=>item._id !== action.payload._id)
            }
        
        default:return state
    }
 }