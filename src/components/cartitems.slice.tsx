import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from './store'

interface Item {
    id: number,
    title: string,
    price: number,
    image: string,
    quantity: number
}

const initialState: Item[] = []

const cartItemsSlice = createSlice({
    name: 'cartitems',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Item>) => {
            return [action.payload, ...state]
        },
        removeFromCart: (state, action: PayloadAction<Item>) => {
            return state.filter(item => action.payload.id !== item.id)
        },
        removeAll: (state) => {
            state = initialState
            return state
        },
        increaseQuantity: (state, action: PayloadAction<Item>) => {
            let itemToIncrease = state.filter(item => action.payload.id === item.id)
            itemToIncrease[0].quantity++
            return state
        },
        decreaseQuantity: (state, action: PayloadAction<Item>) => {
            let itemToDecrease = state.filter(item => action.payload.id === item.id)
            itemToDecrease[0].quantity--
            if (itemToDecrease[0].quantity === 0) {
                itemToDecrease[0].quantity = 1
            }
            return state
        }
    }
})

export const { addToCart, removeFromCart, removeAll, increaseQuantity, decreaseQuantity } = cartItemsSlice.actions

export const getCartItemsSelector = (state: RootState) => state.cartitems

export default cartItemsSlice.reducer;