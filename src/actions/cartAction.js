import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes";

export const addToCart=(product)=>(dispatch,getState)=>{
    
    const cartItems=getState().cart.cartItems.slice();
    let alreadyexists=false;
    for(var i=0;i<cartItems.length;i++){
        if(i._id==product._id){
            alreadyexists=true;
        }
    }   

    if(alreadyexists=false){
            cartItems.push({...product});

        }
    
    dispatch({
        type:ADD_TO_CART,
        payload:{cartItems}
    });
    localStorage.setItem("cartItems",JSON.stringify(cartItems));
    
}


export const removeFromcart=(product)=>(dispatch,getState)=>{
    const cartItems=getState().cart.cartItems.slice() 
    .filter(
        (x)=>x._id !==product._id
    )
    dispatch({
        type:REMOVE_FROM_CART,
        payload:{cartItems}
    })
    localStorage.setItem("cartItems",JSON.stringify(cartItems));
}