import type { Action } from '@reduxjs/toolkit';

interface SubscribeUserAction extends Action {
  type: 'subscribeUser';
  payload: {
    destination: string;
  };
}

interface SubscribeTimeoutAction extends Action {
  type: 'subscribeTimeout';
  payload: {
    destination: string;
  };
}

interface SubscribeKeywordAction extends Action {
  type: 'subscribeKeyword';
  payload: {
    destination: string;
  };
}

interface SubscribeSelectAction extends Action {
  type: 'subscribeSelect';
  payload: {
    destination: string;
  };
}

interface SubscribeNoticeAction extends Action {
  type: 'subscribeNotice';
  payload: {
    destination: string;
  };
}

interface SubscribeEmotionAction extends Action {
  type: 'subscribeEmotion';
  payload: {
    destination: string;
  };
}

interface SubscribeEmotionListAction extends Action {
  type: 'subscribeEmotionList';
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

interface UnsubscribeAction extends Action {
  type: 'unsubscribe';
  payload: {
    destination: string;
  };
}

export type SocketAction =
  | ConnectAction
  | DisconnectAction
  | SendDataAction
  | UnsubscribeAction
  | SubscribeUserAction
  | SubscribeTimeoutAction
  | SubscribeKeywordAction
  | SubscribeSelectAction
  | SubscribeNoticeAction
  | SubscribeEmotionAction
  | SubscribeEmotionListAction;

export const subscribeUser = (destination: string): SubscribeUserAction => ({
  type: 'subscribeUser',
  payload: { destination },
});

export const subscribeTimeout = (
  destination: string
): SubscribeTimeoutAction => ({
  type: 'subscribeTimeout',
  payload: { destination },
});

export const subscribeKeyword = (
  destination: string
): SubscribeKeywordAction => ({
  type: 'subscribeKeyword',
  payload: { destination },
});

export const subscribeSelect = (
  destination: string
): SubscribeSelectAction => ({
  type: 'subscribeSelect',
  payload: { destination },
});

export const subscribeNotice = (
  destination: string
): SubscribeNoticeAction => ({
  type: 'subscribeNotice',
  payload: { destination },
});

export const subscribeEmotion = (
  destination: string
): SubscribeEmotionAction => ({
  type: 'subscribeEmotion',
  payload: { destination },
});

export const subscribeEmotionList = (
  destination: string
): SubscribeEmotionListAction => ({
  type: 'subscribeEmotionList',
  payload: { destination },
});
