import { createSlice } from "@reduxjs/toolkit";


const initialState={
    cart:[],
    quantity:0 
  

}

export const cartSlice=createSlice({
    name:"counter",
    initialState,
        
    
    reducers:{
        AddToCart :(state,action)=>{

          const {id}= action.payload
         let find= state.cart.findIndex((data)=>data.id===id)
           if(find !== -1){
          state.cart[find]={
          ...state.cart[find],
          quantity:state.cart[find].quantity+1
          }
           } else {
            state.cart.push({ ...action.payload, quantity: 1 });
          }

          
          },

        removeitem:(state,action)=>{
            state.cart=state.cart.filter((value)=>{
               return value.id  !==  action.payload.id
            })
        },

        removeall:(state)=>{
         state.cart=[]
        },

        incrementitem:(state,action)=>{
            state.cart=state.cart.map((item)=>{
                if(item.id===action.payload.id){
                    return{...item, quantity: item.quantity+1}
                }
            })
        }
    }

})

export const{ AddToCart ,removeitem,removeall ,incrementitem} =cartSlice.actions

export default cartSlice.reducer