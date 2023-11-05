import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from './store'

interface Item {
        id: number,
        title: string,
        price: number,
        description: string,
        category: string,
        image: string,
        rating: {
          rate: number,
          count: number
        }
}

const initialState: Item[] = []

const cartItemsSlice = createSlice({
    name: 'cartitems',
    initialState, 
    reducers: {
        addToCart: (state, action: PayloadAction<Item>) => {
            return [action.payload, ...state]
        }
    }
})

export const { addToCart } = cartItemsSlice.actions

export const getCartItemsSelector = (state: RootState) => state.cartitems

export default cartItemsSlice.reducer;