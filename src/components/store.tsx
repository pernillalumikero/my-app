import { configureStore} from '@reduxjs/toolkit'
import cartitems from './cartitems.slice'

const store = configureStore({
    reducer: {
        cartitems
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store;