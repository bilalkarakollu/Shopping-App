import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import basketSlice from '../slices/basketSlice';
import authSlice from "../slices/authSlice";

export const store = configureStore({
    reducer: {
        basket: basketSlice,
        auth:authSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;