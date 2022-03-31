import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from  '../app/store';

export interface BasketItem {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    quantity: number;
}

export interface BasketState {
    basketItems: BasketItem[];
    basketTotal: number;
}

const initialState: BasketState = {
    basketItems: [],
    basketTotal: 0
};

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<BasketItem>) => {
            const existingItem = state.basketItems.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.basketItems.push({ ...action.payload, quantity: 1 });
            }
            state.basketTotal += action.payload.price;
        },
        removeItem: (state, action: PayloadAction<number>) => {
            const existingItem = state.basketItems.find(item => item.id === action.payload);
            if (existingItem) {
                state.basketItems = state.basketItems.filter(item => item.id !== action.payload);
                state.basketTotal -= existingItem.price;
            }
        }
    }
});

export const { addItem, removeItem } = basketSlice.actions;

export const basketItems = (state: RootState) => state.basket.basketItems;
export const basketTotal = (state: RootState) => state.basket.basketTotal;

export default basketSlice.reducer;