import type { Middleware } from '@reduxjs/toolkit';
import { io } from 'socket.io-client';
import type { Socket } from 'socket.io-client';
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
        socket.connect();
        console.log('소켓 연결하기', socket);
        break;
      }
      case 'disconnect': {
        if (socket) {
          socket.disconnect();
          console.log('소켓 연결 끊기');
          socket.close();
          socket = null;
        }
        break;
      }
      case 'sendData': {
        const { destination, data } = action.payload;
        if (socket && socket.active) {
          socket.emit(destination, data);
          console.log('데이터 보내는 이벤트 이름: ', destination);
          console.log('이벤트에 함께 보내는 데이터: ', data);
        }
        break;
      }
      case 'recChatRoom': {
        const { destination } = action.payload;
        if (socket) {
          socket.on(destination, (data: RecChatRoom) => {
            console.log('recChatRoom: ', data);
            dispatch(setRecChatRoom(data));
          });
        }
        break;
      }

      case 'recAlert': {
        const { destination } = action.payload;
        if (socket) {
          socket.on(destination, (data: RecAlert) => {
            console.log('recAlert: ', data);
            dispatch(setRecAlert(data));
          });
        }
        break;
      }
      case 'recNotify': {
        const { destination } = action.payload;
        if (socket) {
          socket.on(destination, (data: RecNotify) => {
            console.log('recNotify: ', data);
            dispatch(setRecNotify(data));
          });
        }
        break;
      }
      case 'recQuestion': {
        const { destination } = action.payload;
        if (socket) {
          socket.on(destination, (data: RecQuestion) => {
            console.log('recQuestion: ', data);
            dispatch(setRecQuestion(data));
          });
        }
        break;
      }
      case 'recEmotion': {
        const { destination } = action.payload;
        if (socket) {
          socket.on(destination, (data: RecEmotion) => {
            console.log('recEmotion: ', data);
            dispatch(setRecEmotion(data));
          });
        }
        break;
      }
      case 'recNewEmotion': {
        const { destination } = action.payload;
        if (socket) {
          socket.on(destination, (data: RecNewEmotion) => {
            console.log('recNewEmotion: ', data);
            dispatch(setRecNewEmotion(data));
          });
        }
        break;
      }
      case 'createRoom': {
        const { destination } = action.payload;
        if (socket) {
          socket.on(destination, (data: { type: string }) => {
            console.log('createRoom: ', data);
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
