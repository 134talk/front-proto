import { configureStore } from '@reduxjs/toolkit';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import chatSlice from './chatSlice';
import socketMiddleware from './socketMiddleware';

const store = configureStore({
  reducer: {
    chat: chatSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().prepend(socketMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
