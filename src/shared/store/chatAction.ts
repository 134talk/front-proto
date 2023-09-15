import type { Action } from '@reduxjs/toolkit';

interface RecChatRoomAction extends Action {
  type: 'recChatRoom';
  payload: {
    destination: string;
  };
}
interface RecAlertAction extends Action {
  type: 'recAlert';
  payload: {
    destination: string;
  };
}

interface RecNotifyAction extends Action {
  type: 'recNotify';
  payload: {
    destination: string;
  };
}

interface RecQuestionAction extends Action {
  type: 'recQuestion';
  payload: {
    destination: string;
  };
}

interface ResQuestionAction extends Action {
  type: 'resQuestion';
  payload: {
    destination: string;
  };
}

interface RecEmotionAction extends Action {
  type: 'recEmotion';
  payload: {
    destination: string;
  };
}

interface RecNewEmotionAction extends Action {
  type: 'recNewEmotion';
  payload: {
    destination: string;
  };
}

interface CreateRoomAction extends Action {
  type: 'createRoom';
  payload: {
    destination: string;
  };
}

interface SendDataAction extends Action {
  type: 'sendData';
  payload: {
    destination: string;
    data: any;
  };
}

interface ConnectAction extends Action {
  type: 'connect';
}

interface DisconnectAction extends Action {
  type: 'disconnect';
}

export type SocketAction =
  | ConnectAction
  | DisconnectAction
  | SendDataAction
  | RecChatRoomAction
  | RecAlertAction
  | RecNotifyAction
  | RecQuestionAction
  | ResQuestionAction
  | RecEmotionAction
  | RecNewEmotionAction
  | CreateRoomAction;

export const recChatRoom = (destination: string): RecChatRoomAction => ({
  type: 'recChatRoom',
  payload: { destination },
});

export const recAlert = (destination: string): RecAlertAction => ({
  type: 'recAlert',
  payload: { destination },
});

export const recNotify = (destination: string): RecNotifyAction => ({
  type: 'recNotify',
  payload: { destination },
});

export const recQuestion = (destination: string): RecQuestionAction => ({
  type: 'recQuestion',
  payload: { destination },
});

export const resQuestion = (destination: string): ResQuestionAction => ({
  type: 'resQuestion',
  payload: { destination },
});

export const recEmotion = (destination: string): RecEmotionAction => ({
  type: 'recEmotion',
  payload: { destination },
});

export const recNewEmotion = (destination: string): RecNewEmotionAction => ({
  type: 'recNewEmotion',
  payload: { destination },
});

export const createRoom = (destination: string): CreateRoomAction => ({
  type: 'createRoom',
  payload: { destination },
});
