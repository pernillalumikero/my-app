import { configureStore} from '@reduxjs/toolkit'
import cartitems from './cartitems.slice'
import { useDispatch } from 'react-redux';

const store = configureStore({
    reducer: {
        cartitems
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;


export default store;