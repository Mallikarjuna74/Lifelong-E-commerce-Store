import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
// Import the authReducer from the authSlice file

// This file sets up the Redux store for the application, integrating the authentication state management.
export const store = configureStore({
    reducer: {
        // Reducer for authentication state
        auth: authReducer,
    },
})