import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import {
    createUserWithEmailAndPassword,
    updateCurrentUser,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail
} from "firebase/auth";
import {auth} from '../../config/firebase';

interface AuthState {
    name?: string;
    email: string;
    password: string;
    isAuthenticated?: boolean;

    isLoading?: boolean;
    error?: string;
}


const initialState: AuthState = {
    name: '',
    email: '',
    password: '',
    isAuthenticated: false,

    isLoading: false,
    error: ''
};

export const register = createAsyncThunk(
    "auth/register",
    async ({name, email, password}: AuthState, {rejectWithValue}) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            // @ts-ignore
            await updateCurrentUser(auth, {displayName: name});
        } catch (e: any) {
            return rejectWithValue(e.code);
        }
    }
);

export const logIn = createAsyncThunk(
    "auth/login",
    async ({email, password}: AuthState, {rejectWithValue}) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (e: any) {
            return rejectWithValue(e.code);
        }
    }
);

export const logOut = createAsyncThunk("auth/logout", async () => {
    await signOut(auth);
});

export const forgotPassword = createAsyncThunk(
    "auth/forgotPassword",
    async (email: string, {rejectWithValue}) => {
        try {
            await sendPasswordResetEmail(auth, email);
        } catch (e: any) {
            return rejectWithValue(e.code);
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        changeName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        changeEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        changePassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state,) => {
                state.isLoading = false;
            })
            .addCase(register.rejected, (state, action: PayloadAction<any>) => {
                state.error = action.payload;
                state.isLoading = false;
            })
            .addCase(logIn.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(logIn.fulfilled, (state,) => {
                state.isLoading = false;
            })
            .addCase(logIn.rejected, (state, action: PayloadAction<any>) => {
                state.error = action.payload;
                state.isLoading = false;
            })
    },
});

export const {changeName, changeEmail, changePassword} = authSlice.actions;
export default authSlice.reducer;