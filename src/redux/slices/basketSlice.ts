import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from "../app/store";
import { toast } from 'react-toastify';

interface Rating {
    rate:number,
    count:number
}

interface BasketItem {
    id:number,
    title:string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating:Rating
    quantity?:number
}

interface BasketState {
    basketItems: BasketItem[];
    basketTotal: number;
    basketCount: number
}

const initialState: BasketState = {
    basketItems: [],
    basketTotal: 0,
    basketCount:0
};

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<BasketItem>) => {
            const existingItem = state.basketItems.find(item => item.id === action.payload.id);
            if (existingItem) {
                // @ts-ignore
                existingItem.quantity += 1;
            } else {
                state.basketItems.push({ ...action.payload, quantity: 1 });
            }
            state.basketTotal += action.payload.price;
            state.basketCount += 1
        },
        removeProduct: (state, action: PayloadAction<number>) => {
            const existingItem = state.basketItems.find(item => item.id === action.payload);
            // @ts-ignore
            if (existingItem && existingItem.quantity > 1) {
                // @ts-ignore
                existingItem.quantity -= 1;
                state.basketTotal -= existingItem.price;
                state.basketCount -= 1;
            }else{
                state.basketItems = state.basketItems.filter(item => item.id !== action.payload);
                // @ts-ignore
                state.basketTotal -= existingItem.price;
                state.basketCount -= 1;
            }
        }
    }
});

export const { addProduct, removeProduct } = basketSlice.actions;

export const addProductController = (product: BasketItem): AppThunk => (
    dispatch,
    getState
) => {
    dispatch(addProduct(product));
    toast.success('Product Added')
};

export const removeProductController = (productId: number): AppThunk => (
    dispatch,
    getState
) => {
    dispatch(removeProduct(productId));
    toast.success('Product Removed')
};

export default basketSlice.reducer;