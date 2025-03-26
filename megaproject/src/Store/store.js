// This file sets up the Redux store for the application using Redux Toolkit.
// The store is configured with reducers that manage the state of the application.

import {configureStore} from "@reduxjs/toolkit" // Import the configureStore function from Redux Toolkit
import authSlice from './aurthSlice';

const store = configureStore({
    // The reducer object will contain all the reducers for the application.
    reducer:{
        // Add reducers here
        auth : authSlice,
    }
});

export default store; // Export the configured store as the default export