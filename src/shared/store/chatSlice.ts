import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface UserInfo {
  userId: number;
  nickname: string;
  userName: string;
  profileUrl: string;
}
export interface ChatUserInfo extends UserInfo {
  activeFlag?: boolean;
  socketFlag?: number;
}
export interface SubUser {
  checkInFlag: 'true' | 'false' | 'stillFalse';
  requestId: number;
  chatroomUserInfos: ChatUserInfo[];
}
export interface SubTimeout {
  roomId: string;
  fiveMinuteLeft: boolean;
}
export interface TopicList {
  keywordId: number;
  keywordName: string;
  questionId: number;
  questionName: string;
  depth: string;
}
export interface SubKeyword {
  socketFlag: number;
  topicList: TopicList[];
}
export interface SubSelect {
  allRegistered: boolean;
}
export interface Speaker {
  userId: number;
  profileUrl: string;
  nickname: string;
  userName: string;
}
export interface Topic {
  keyword: string;
  questionCode: number;
  questionName: string;
  depth: string;
  questionGuide: string[];
}
export interface SubNotice {
  speaker: Speaker;
  userList: UserInfo[];
  topic: Topic;
  questionCount: number;
  endFlag: boolean;
}
export interface SubEmotion {
  emoticonCode: number;
}
export interface Emotion {
  code: number;
  amount: number;
}
export interface SubEmotionList {
  emoticonList: Emotion[];
}
type ChatState = {
  isStompConnected: boolean;
  subUser: SubUser | null;
  subTimeout: SubTimeout | null;
  subKeyword: SubKeyword | null;
  isReselected: boolean;
  subSelect: SubSelect | null;
  subNotice: SubNotice | null;
  subEmotion: SubEmotion | null;
  subEmotionList: SubEmotionList | null;
};

const initialState: ChatState = {
  isStompConnected: false,
  subUser: null,
  subTimeout: null,
  subKeyword: null,
  isReselected: false,
  subSelect: null,
  subNotice: null,
  subEmotion: null,
  subEmotionList: null,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setIsStompConnected(state, action: PayloadAction<boolean>) {
      state.isStompConnected = action.payload;
    },
    setSubUser(state, action: PayloadAction<SubUser | null>) {
      state.subUser = action.payload;
      console.log('setSubUser in chatSlice: ', action.payload);
    },
    setSubTimeout(state, action: PayloadAction<SubTimeout | null>) {
      state.subTimeout = action.payload;
      console.log('setSubTimeout in chatSlice: ', action.payload);
    },
    setSubKeyword(state, action: PayloadAction<SubKeyword | null>) {
      state.subKeyword = action.payload;
      console.log('setSubKeyword in chatSlice: ', action.payload);
    },
    setIsReselected(state, action: PayloadAction<boolean>) {
      state.isReselected = action.payload;
    },
    setSubSelect(state, action: PayloadAction<SubSelect | null>) {
      state.subSelect = action.payload;
      console.log('setSubUser in chatSlice: ', action.payload);
    },
    setSubNotice(state, action: PayloadAction<SubNotice | null>) {
      state.subNotice = action.payload;
      console.log('setSubSelect in chatSlice: ', action.payload);
    },
    setSubEmotion(state, action: PayloadAction<SubEmotion | null>) {
      state.subEmotion = action.payload;
      console.log('setSubEmotion in chatSlice: ', action.payload);
    },
    setSubEmotionList(state, action: PayloadAction<SubEmotionList | null>) {
      state.subEmotionList = action.payload;
      console.log('setSubEmotionList in chatSlice: ', action.payload);
    },
  },
});

export const {
  setSubUser,
  setIsStompConnected,
  setSubTimeout,
  setSubKeyword,
  setIsReselected,
  setSubSelect,
  setSubNotice,
  setSubEmotion,
  setSubEmotionList,
} = chatSlice.actions;

export default chatSlice.reducer;
