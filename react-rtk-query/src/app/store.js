import { configureStore } from '@reduxjs/toolkit';
// import { createLogger } from 'redux-logger';
import { productsApi } from '../../features/apiSlice';

// const logger = createLogger();

const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware)
})

export default store;