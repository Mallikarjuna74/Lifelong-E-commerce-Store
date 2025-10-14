import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const signUpUser = createAsyncThunk(
    'auth/signupUser',
    async ({ email, password}, {rejectWithValue}) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            return { uid: user.uid, email: user.email }
        } 
        catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

//Signin existing user
export const signinUser = createAsyncThunk(
    'auth/signinUser',
    async ({ email, password }, { rejectWithValue}) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            return { uid: user.uid, email: user.email };
        } 
        catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Signout user
export const signoutUser = createAsyncThunk(
    'auth/signoutUser',
    async (__, { rejectWithValue }) => {
        try {
            await signOut(auth);
            return null; // Return null to indicate successful signout
        } 
        catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const intialState = {
    user: null,
    isAuthenticated: false,
    status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
    error: null,
    isInitialized: false, // To track if the initial auth check is done
};

const authSlice = createSlice({
    name: 'auth',
    initialState: intialState,
    reducers: {
        //Reducers to set user and authentication status
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = !!action.payload;
            state.status = action.payload ? 'succeeded' : 'idle';
            state.isInitialized = true; // The auth check has completed.
        },
        clearUser: (state) => {
            state.user = null;
            state.isInitialized = true; // The auth check has completed.
        },
        setLoading: (state)=> {
            state.status = 'loading';
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(signUpUser.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(signUpUser.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.user = action.payload;
            state.isAuthenticated = true;
        })
        .addCase(signUpUser.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        })
        .addCase(signinUser.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(signinUser.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.user = action.payload;
            state.isAuthenticated = true;
        })
        .addCase(signinUser.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        })
        .addCase(signoutUser.fulfilled, (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.status = 'idle';
        });
    },
});

export const { setUser, setLoading, clearUser } = authSlice.actions;

// Selectors to get user and authentication status
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectUser = (state) => state.auth.user;
export const selectAuthIsInitialized = (state) => state.auth.isInitialized;
export const selectAuthStatus = (state) => state.auth.status;
export const selectAuthError = (state) => state.auth.error;
export const selectAuthLoading = (state) => state.auth.status === 'loading';

export default authSlice.reducer; // Export the reducer to be used in the store
// This will be used in the store configuration to manage authentication state

