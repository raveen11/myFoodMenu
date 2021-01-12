import {combineReducers} from 'redux'
import { cartReducer } from './cartReducer'
import {productsReducer} from './productfetchReducers'
export default combineReducers({
    products:productsReducer,
    cart:cartReducer
})