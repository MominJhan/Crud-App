
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../api/apiSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;
