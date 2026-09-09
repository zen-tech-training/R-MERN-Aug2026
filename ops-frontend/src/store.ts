//Step 2
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';

const store = configureStore({    //Old appraoch - createStore()
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;