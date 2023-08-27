import {combineReducers} from 'redux';
import {createStore,applyMiddleware} from "redux";

import thunk from 'redux-thunk'
import {getAllpizzaReducer} from './pizzareducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { cartreducer } from './cartreducer'
import {placeorderreducer} from "./orderreducer"
const rootreducer=combineReducers({
    getAllpizzaReducer:getAllpizzaReducer,
    cartreducer:cartreducer,
    placeorderreducer:placeorderreducer
    
})
const cartitems=localStorage.getItem('cartitems')?JSON.parse(localStorage.getItem('cartitems')):[];
const initialstate={
    cartreducer:{
        cartitems:cartitems
    },
    
}
const composeenhancer=composeWithDevTools({});
const store=createStore(rootreducer,initialstate,composeenhancer(applyMiddleware(thunk)))
export default store;