import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IState, TCart } from "../../Interfaces";

const initialState: IState = {
    cart:[],
}

const FavouriteReducer = createSlice({
    name:'Favourite',
    initialState,
    reducers:{
        addFav: (state, action: PayloadAction<TCart[]>)=>{
state?.cart?.push(action.payload)
console.log(JSON.stringify(state?.cart, null, 3))
        },
        removefav: (state, action)=>{
            console.log("action: ",action.payload)
            state.cart = state?.cart?.filter((item) => item.id !== action.payload)
        }
    }
})

export const { addFav, removefav } = FavouriteReducer.actions;
export default FavouriteReducer.reducer;