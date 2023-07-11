import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface User {
  userId: number;
  name: string;
  nickname: string;
}
export interface UserInfo extends User {
  profileUrl: string;
}
export interface ChatUserInfo extends UserInfo {
  activeFlag?: boolean;
  socketFlag?: number;
}
export interface Metadata {
  senderId: number;
  questionNumber: number;
  finalQuestionNumber: number;
}
export interface Topic {
  keywordName: string;
  questionId: number;
  questionName: string;
  depth: string;
}
export interface TopicList extends Topic {
  keywordId: number;
}
export interface ChatTopic extends Topic {
  questionGuide: string[];
}
export interface SubUser {
  type: 'RE_ENTER' | 'NEW_CHATROOM';
  checkInFlag: 'true' | 'false' | 'stillFalse';
  requestId: number;
  chatroomUserInfos: ChatUserInfo[];
}
export interface SubTimeout {
  fiveMinuteLeft: boolean;
}
export interface SubKeyword {
  socketFlag: number;
  topicList: TopicList[];
}
export interface SubSelect {
  allRegistered: boolean;
  questionNumber: number;
}
export interface SubNotice {
  metadata: Metadata;
  speaker: User;
  userList: UserInfo[];
  topic: ChatTopic;
}
export interface SubEmotion {
  emoticonCode: number;
}
export interface Emotion extends SubEmotion {
  emoticonCount: number;
}
export interface SubEmotionList {
  emoticonList: Emotion[];
}
type ChatState = {
  isStompConnected: boolean;
  subUser: SubUser | null;
  subTimeout: SubTimeout | null;
  subKeyword: SubKeyword | null;
  subSelect: SubSelect | null;
  subNotice: SubNotice | null;
  subEmotion: SubEmotion | null;
  subEmotionList: SubEmotionList | null;
  subNewChat: { type: string };
};

const initialState: ChatState = {
  isStompConnected: false,
  subUser: null,
  subTimeout: null,
  subKeyword: null,
  subSelect: null,
  subNotice: null,
  subEmotion: null,
  subEmotionList: null,
  subNewChat: { type: '' },
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
    },
    setSubTimeout(state, action: PayloadAction<SubTimeout | null>) {
      state.subTimeout = action.payload;
    },
    setSubKeyword(state, action: PayloadAction<SubKeyword | null>) {
      state.subKeyword = action.payload;
    },
    setSubSelect(state, action: PayloadAction<SubSelect | null>) {
      state.subSelect = action.payload;
    },
    setSubNotice(state, action: PayloadAction<SubNotice | null>) {
      state.subNotice = action.payload;
    },
    setSubEmotion(state, action: PayloadAction<SubEmotion | null>) {
      state.subEmotion = action.payload;
    },
    setSubEmotionList(state, action: PayloadAction<SubEmotionList | null>) {
      state.subEmotionList = action.payload;
    },
    setSubNewChat(state, action: PayloadAction<{ type: string } | null>) {
      state.subNewChat = action.payload;
    },
  },
});

export const {
  setSubUser,
  setIsStompConnected,
  setSubTimeout,
  setSubKeyword,
  setSubSelect,
  setSubNotice,
  setSubEmotion,
  setSubEmotionList,
  setSubNewChat,
} = chatSlice.actions;

export default chatSlice.reducer;
