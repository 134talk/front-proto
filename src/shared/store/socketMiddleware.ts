import type { Middleware } from '@reduxjs/toolkit';
import { RxStomp, RxStompState } from '@stomp/rx-stomp';
import type { IMessage, StompConfig } from '@stomp/stompjs';
import type { Subscription } from 'rxjs';
import SockJS from 'sockjs-client';
import type { SocketAction } from './chatAction';
import type {
  SubEmotion,
  SubEmotionList,
  SubKeyword,
  SubNotice,
  SubSelect,
  SubTimeout,
  SubUser,
} from './chatSlice';
import {
  setIsStompConnected,
  setSubEmotion,
  setSubEmotionList,
  setSubKeyword,
  setSubNewChat,
  setSubNotice,
  setSubSelect,
  setSubTimeout,
  setSubUser,
} from './chatSlice';

let rxStomp: RxStomp | null = null;

const subscriptions: Map<string, Subscription> = new Map();

const socketMiddleware: Middleware = ({ getState, dispatch }) => {
  return next => (action: SocketAction) => {
    switch (action.type) {
      case 'connect': {
        if (rxStomp) {
          rxStomp.deactivate();
          subscriptions.clear();
        }
        const socket = new SockJS(process.env.REACT_APP_SOCKET_SERVER);
        rxStomp = new RxStomp();
        const config: StompConfig = {
          brokerURL: process.env.REACT_APP_SOCKET_SERVER,
          webSocketFactory: () => socket,
          debug: res => console.log(res),
        };
        rxStomp.configure(config);
        rxStomp.activate();
        rxStomp.connectionState$.subscribe(state => {
          if (state === RxStompState.OPEN) {
            dispatch(setIsStompConnected(true));
          } else if (state === RxStompState.CLOSED) {
            dispatch(setIsStompConnected(false));
            subscriptions.clear();
          }
        });
        break;
      }
      case 'disconnect': {
        if (rxStomp) {
          rxStomp.deactivate();
          rxStomp = null;
          subscriptions.clear();
        }
        break;
      }
      case 'sendData': {
        const { destination, data } = action.payload;
        if (rxStomp && rxStomp.connected) {
          console.log('data: ', data);
          rxStomp.publish({ destination, body: JSON.stringify(data) });
        }
        break;
      }
      case 'subscribeUser': {
        const { destination } = action.payload;
        if (rxStomp && rxStomp.connected) {
          const handleReceivedData = (message: IMessage) => {
            const data: SubUser = JSON.parse(message.body);
            dispatch(setSubUser(data));
          };
          const subscription = rxStomp
            .watch(destination)
            .subscribe(handleReceivedData);
          subscriptions.set(destination, subscription);
        }
        break;
      }
      case 'subscribeTimeout': {
        const { destination } = action.payload;
        if (rxStomp && rxStomp.connected) {
          const handleReceivedData = (message: IMessage) => {
            const data: SubTimeout = JSON.parse(message.body);
            dispatch(setSubTimeout(data));
          };
          const subscription = rxStomp
            .watch(destination)
            .subscribe(handleReceivedData);
          subscriptions.set(destination, subscription);
        }
        break;
      }
      case 'subscribeKeyword': {
        const { destination } = action.payload;
        if (rxStomp && rxStomp.connected) {
          const handleReceivedData = (message: IMessage) => {
            const data: SubKeyword = JSON.parse(message.body);
            dispatch(setSubKeyword(data));
          };
          const subscription = rxStomp
            .watch(destination)
            .subscribe(handleReceivedData);
          subscriptions.set(destination, subscription);
        }
        break;
      }
      case 'subscribeSelect': {
        const { destination } = action.payload;
        if (rxStomp && rxStomp.connected) {
          const handleReceivedData = (message: IMessage) => {
            const data: SubSelect = JSON.parse(message.body);
            dispatch(setSubSelect(data));
          };
          const subscription = rxStomp
            .watch(destination)
            .subscribe(handleReceivedData);
          subscriptions.set(destination, subscription);
        }
        break;
      }
      case 'subscribeNotice': {
        const { destination } = action.payload;
        if (rxStomp && rxStomp.connected) {
          const handleReceivedData = (message: IMessage) => {
            const data: SubNotice = JSON.parse(message.body);
            dispatch(setSubNotice(data));
          };
          const subscription = rxStomp
            .watch(destination)
            .subscribe(handleReceivedData);
          subscriptions.set(destination, subscription);
        }
        break;
      }
      case 'subscribeEmotion': {
        const { destination } = action.payload;
        if (rxStomp && rxStomp.connected) {
          const handleReceivedData = (message: IMessage) => {
            const data: SubEmotion = JSON.parse(message.body);
            dispatch(setSubEmotion(data));
          };
          const subscription = rxStomp
            .watch(destination)
            .subscribe(handleReceivedData);
          subscriptions.set(destination, subscription);
        }
        break;
      }
      case 'subscribeEmotionList': {
        const { destination } = action.payload;
        if (rxStomp && rxStomp.connected) {
          const handleReceivedData = (message: IMessage) => {
            const data: SubEmotionList = JSON.parse(message.body);
            dispatch(setSubEmotionList(data));
          };
          const subscription = rxStomp
            .watch(destination)
            .subscribe(handleReceivedData);
          subscriptions.set(destination, subscription);
        }
        break;
      }
      case 'subscribeNewChat': {
        const { destination } = action.payload;
        if (rxStomp && rxStomp.connected) {
          const handleReceivedData = (message: IMessage) => {
            const data: { type: string } = JSON.parse(message.body);
            dispatch(setSubNewChat(data));
          };
          const subscription = rxStomp
            .watch(destination)
            .subscribe(handleReceivedData);
          subscriptions.set(destination, subscription);
        }
        break;
      }
      case 'unsubscribe': {
        const { destination } = action.payload;
        const subscription = subscriptions.get(destination);
        if (subscription) {
          subscription.unsubscribe();
          subscriptions.delete(destination);
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
