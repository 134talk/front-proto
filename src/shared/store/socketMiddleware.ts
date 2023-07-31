import type { Middleware } from '@reduxjs/toolkit';
import type { Socket } from 'socket.io-client';
import { io } from 'socket.io-client';
import type { SocketAction } from './chatAction';
import type {
  RecAlert,
  RecChatRoom,
  RecEmotion,
  RecNewEmotion,
  RecNotify,
  RecQuestion,
} from './chatSlice';
import {
  setCreateRoom,
  setIsSocketConnected,
  setRecAlert,
  setRecChatRoom,
  setRecEmotion,
  setRecNewEmotion,
  setRecNotify,
  setRecQuestion,
} from './chatSlice';

let socket: Socket | null = null;

const socketMiddleware: Middleware = ({ getState, dispatch }) => {
  return next => (action: SocketAction) => {
    switch (action.type) {
      case 'connect': {
        if (socket) {
          socket.close();
        }
        socket = io(process.env.REACT_APP_SOCKET_SERVER);
        socket.on('connect', () => {
          dispatch(setIsSocketConnected(true));
          console.log(`connect: ${socket.id}`);
        });
        socket.on('disconnect', () => {
          dispatch(setIsSocketConnected(false));
          console.log('disconnect');
        });
        break;
      }
      case 'disconnect': {
        if (socket) {
          socket.close();
          socket = null;
        }
        break;
      }
      case 'sendData': {
        const { destination, data } = action.payload;
        if (socket && socket.connected) {
          socket.emit(destination, data);
        }
        break;
      }
      case 'recChatRoom': {
        const { destination } = action.payload;
        if (socket) {
          socket.on(destination, (data: RecChatRoom) => {
            dispatch(setRecChatRoom(data));
          });
        }
        break;
      }

      case 'recAlert': {
        const { destination } = action.payload;
        if (socket) {
          socket.on(destination, (data: RecAlert) => {
            dispatch(setRecAlert(data));
          });
        }
        break;
      }
      case 'recNotify': {
        const { destination } = action.payload;
        if (socket) {
          socket.on(destination, (data: RecNotify) => {
            dispatch(setRecNotify(data));
          });
        }
        break;
      }
      case 'recQuestion': {
        const { destination } = action.payload;
        if (socket) {
          socket.on(destination, (data: RecQuestion) => {
            dispatch(setRecQuestion(data));
          });
        }
        break;
      }
      case 'recEmotion': {
        const { destination } = action.payload;
        if (socket) {
          socket.on(destination, (data: RecEmotion) => {
            dispatch(setRecEmotion(data));
          });
        }
        break;
      }
      case 'recNewEmotion': {
        const { destination } = action.payload;
        if (socket) {
          socket.on(destination, (data: RecNewEmotion) => {
            dispatch(setRecNewEmotion(data));
          });
        }
        break;
      }
      case 'createRoom': {
        const { destination } = action.payload;
        if (socket) {
          socket.on(destination, (data: { type: string }) => {
            dispatch(setCreateRoom(data));
          });
        }
        break;
      }
      default:
        break;
    }
    return next(action);
  };
};

export default socketMiddleware;
