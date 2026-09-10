//Step 2
//File: src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';
import themeReducer from './features/themeSlice'; 
import authReducer from './features/authSlice';

const store = configureStore({    //Old appraoch - createStore()
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;