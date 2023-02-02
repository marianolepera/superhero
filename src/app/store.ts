import { configureStore } from '@reduxjs/toolkit'
import heroSlice from '../features/heros/heroSlice'
// ...
const store = configureStore({
  reducer: {
    heros: heroSlice
  },
})
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store