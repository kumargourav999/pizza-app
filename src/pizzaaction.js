import axios from 'axios'
export const getallpizza=()=> async (dispatch) =>{
   dispatch({type:'GET_PIZZA_REQUEST'});
   try{
         const res= await axios.get('/api/pizzas/getAllpizzas');
         console.log(res);
         dispatch({type:'GET_PIZZA_SUCCESS',payload:res.data});

   }catch(error){
    dispatch({type:"GET_PIZZA_FAIL",payload:error});
   }
};